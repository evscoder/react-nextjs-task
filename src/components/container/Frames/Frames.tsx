'use client';

import React, {memo, useCallback, useEffect, useState} from 'react';
import cn from "clsx";
import s from "./Frames.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/store";
import Frame from "@/components/container/Frames/Frame";
import {getRequestFrames} from "@/api/frames/getFrames";
import UiButton from "@/components/ui/UiButton/UiButton";

const Frames = memo(() => {
    const { data, loading, maxPage } = useSelector((state: RootState) => state.framesSlice);
    const dispatch = useDispatch<AppDispatch>();
    const [page, setPage] = useState<number>(2);

    useEffect(() => {
        dispatch(getRequestFrames('1'));
    }, [dispatch])

    const onLoadItems = useCallback(() => {
        dispatch(getRequestFrames(String(page)));
        setPage(v => v + 1);
    }, [dispatch, page]);

    return (
        <section className={cn(s.frames, 'section')}>
            <div className={'container'}>
                <div className={cn(s.cardsHeader, 'section-header')}>
                    <h1 className={'section-title'}>Кадры со съемок</h1>
                </div>
                { data &&
                    <div className={s.frames__grid}>
                        {data.map((it, i) => (
                            <Frame primary={i === 0} {...it} key={it.id} />
                        ))}
                    </div>
                }
                {page <= maxPage &&
                    <UiButton color={'red'} outline={true} block={true} onClick={onLoadItems}>
                        {loading ? 'Загрузка...' : 'Показать еще' }
                    </UiButton>
                }
            </div>
        </section>
    );
});

Frames.displayName = 'Frames';

export default Frames;
