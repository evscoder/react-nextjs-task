'use client';
import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import s from './SectionMap.module.scss';
import cn from 'clsx';
import ImagePath from "@/helper/imagePath";

const SectionMap = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 11,
    };

    const placeMarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: ImagePath('point.svg'),
        iconImageSize: [40, 40]
    }
    return (
        <div className={cn(s.sectionMap, 'section')}>
            <YMaps>
                <Map defaultState={defaultState}>
                    <Placemark options={placeMarkOptions} geometry={[55.751574, 37.573856]} />
                    <Placemark options={placeMarkOptions} geometry={[55.751574, 37.563856]} />
                    <Placemark options={placeMarkOptions} geometry={[55.751574, 37.553856]} />
                </Map>
            </YMaps>
        </div>
    );
};

export default SectionMap;
