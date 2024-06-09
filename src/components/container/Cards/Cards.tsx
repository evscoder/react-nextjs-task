'use client';

import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import s from './Cards.module.scss';
import CardItem from "@/components/container/Cards/CardItem";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import {getRequestCards} from "@/api/cards/getCards";
import {Navigation, Pagination} from "swiper/modules";
import cn from "clsx";
import SliderProgress from "@/components/ui/SliderProgress/SliderProgress";
import SliderArrow from "@/components/ui/SliderArrow/SliderArrow";

interface Props {
}
const Cards: React.FC<Props> = () => {
    const { data } = useSelector((state: RootState) => state.cardsSlice);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getRequestCards());
    }, [dispatch])

    const progress = useRef<HTMLDivElement>(null)
    const arrowLeft = useRef<HTMLButtonElement>(null);
    const arrowRight = useRef<HTMLButtonElement>(null);

    return (
        <section className={cn(s.cards, 'section')}>
            <div className={'container'}>
                <div className={cn(s.cardsHeader, 'section-header')}>
                    <h1 className={'section-title'}>Актерский состав</h1>
                    <SliderArrow ref={arrowLeft} direction={'left'} />
                    <SliderArrow ref={arrowRight} direction={'right'} />
                </div>
                <SliderProgress ref={progress} />
                { data &&
                    <Swiper
                        className={s.swiper}
                        init={false}
                        speed={600}
                        slidesPerView={'auto'}
                        spaceBetween={24}
                        freeMode={true}
                        watchSlidesProgress={true}
                        pagination={{
                            el: progress.current,
                            type: 'progressbar',
                        }}
                        modules={[Pagination, Navigation]}
                        navigation={{
                            prevEl: arrowLeft.current,
                            nextEl: arrowRight.current
                        }}
                    >
                        {data.map(it => (
                            <SwiperSlide className={s.card} key={it.id}>
                                <CardItem {...it} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                }
            </div>
        </section>
    );
};

export default Cards;
