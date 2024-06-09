import React, {forwardRef} from 'react';
import s from "./SliderArrow.module.scss";
import Icon from "@/components/ui/Icon/Icon";

interface Props {
    direction: 'left' | 'right'
}

const SliderArrow = forwardRef<HTMLButtonElement, Props>(({ direction }, ref) => {
    return (
        <button
            ref={ref}
            className={s.arrow}
        >
            <Icon name={`arrow-${direction}`} width={18} height={32} />
        </button>
    );
});

SliderArrow.displayName = 'SliderArrow';

export default SliderArrow;
