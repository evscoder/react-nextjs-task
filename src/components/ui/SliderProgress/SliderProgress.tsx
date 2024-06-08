import React, {forwardRef} from 'react';
import s from './SliderProgress.module.scss';

const SliderProgress = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div className={s.sliderProgress} ref={ref}></div>
    );
});

SliderProgress.displayName = 'SliderProgress';

export default SliderProgress;
