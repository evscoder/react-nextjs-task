'use client';

import React from 'react';
import Select, {StylesConfig} from "react-select";
import cn from "clsx";
import s from './UiSelect.module.scss';

type SelectProps = {
    hasValue?: boolean,
    isMulti?: boolean,
    options?: any,
    selectProps?: any,
    emotion?: any,
    name?: string
    isSearch?: boolean,
    onChange?: () => void
}

const colourStyles: StylesConfig<any> = {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'var(--white-a10)',
        height: 'calc(var(--control-height) * 1px)',
        border: '1px solid transparent',
        borderRadius: '0',
        padding: '4px 20px',
        color: 'var(--white)',
        outline: 'none',
        ':focus': {
            outline: 'none'
        }
    }),
    option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isSelected ? 'var(--white-a10)' : 'transparent',
        ':hover': {
            ...styles[':hover'],
            backgroundColor: 'var(--white-a10)',
        },
        ':active': {
            ...styles[':active'],
            backgroundColor: 'var(--white-a10)',
            color: 'var(--white)'
        }
    }),
    input: (styles) => ({
        ...styles,
        color: 'var(--white)',
        padding: '0!important'
    }),
    placeholder: (styles) => ({ ...styles }),
    valueContainer: (styles) => ({
        ...styles,
        padding: '0'
    }),
    singleValue: (styles, { data }) => ({
        ...styles,
        padding: '0!important',
        color: 'var(--white)'
    }),
};

const UiSelect: React.FC<SelectProps> = ({ ...props }) => {
    return (
        <Select
            className={cn(s.select, 'basic-single')}
            classNamePrefix="select"
            name={props.name}
            isSearchable={props.isSearch}
            options={props.options}
            onChange={props.onChange}
            styles={colourStyles}
        />
    );
};

export default UiSelect;
