'use client'

import React, {useState} from 'react';
import UiInput, {InputProps} from "@/components/ui/UiInput/UiInput";
import withFieldError, {WithFieldErrorProps} from "@/hocs/withFieldError";
import InputPhone from "@/components/ui/InputPhone/InputPhone";
import UiTextarea, {TextareaProps} from "@/components/ui/UiTextarea/UiTextarea";
import UiInputFile, {InputFileProps} from "@/components/ui/UiInputFile/UiInputFile";
import UiCheckbox, {CheckboxProps} from "@/components/ui/UiCheckbox/UiCheckbox";
import UiButton from "@/components/ui/UiButton/UiButton";
import UiSelect, {SelectProps} from "@/components/ui/UiSelect/UiSelect";
const InputSelect = withFieldError<SelectProps & WithFieldErrorProps>(UiSelect);
const InputField = withFieldError<InputProps & WithFieldErrorProps>(UiInput);
const InputNumber = withFieldError<InputProps & WithFieldErrorProps>(InputPhone);
const InputText = withFieldError<TextareaProps & WithFieldErrorProps>(UiTextarea);
const InputFile = withFieldError<InputFileProps & WithFieldErrorProps>(UiInputFile);
const InputCheckbox = withFieldError<CheckboxProps & WithFieldErrorProps>(UiCheckbox);
import { useFormik } from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";
import {formSuccess} from "@/redux/sliceSubscribe";

export interface StateOptionsProps {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
}

export const stateOptions: readonly StateOptionsProps[] = [
    { value: 'Москва', label: 'Москва', isFixed: true },
    { value: 'Санкт-Питербург', label: 'Санкт-Питербург'},
    { value: 'Казань', label: 'Казань'},
    { value: 'Краснодар', label: 'Краснодар', isFixed: true },
    { value: 'Ростов на дону', label: 'Ростов на дону'},
    { value: 'silver', label: 'Silver'},
];

const SubscriptionForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isResult, setIsResult] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            message: "",
            country: "",
            terms: "",
            file: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Это обязательное поле'),
            email: Yup.string().email("Неккоректно веден адрес").required('Это обязательное поле'),
            country: Yup.string()
                .test("len", "Это обязательное поле", (val = '') => {
                    return val !== '';
                })
                .required('Это обязательное поле'),
            message: Yup.string().required('Это обязательное поле'),
            number: Yup.string()
                .test("len", "Неккоректно веден номер", (val = '') => {
                    return val.replace(/\s|\(|\)|\|-|_+/g, "").length === 12;
                })
                .required("Это обязательное поле"),
            file: Yup.string()
                .test("len", "Это обязательное поле", (val = '') => {
                    return val !== '';
                })
                .required("Это обязательное поле"),
            terms: Yup.array().required("Это обязательное поле")
        }),
        onSubmit: (values) => {
            console.log("form submitted");
            console.log(values);
            dispatch(formSuccess(true));
        },
    });

    const onChangeFile = (event: any) => {
        const files = event.target.files[0];

        if (files) {
            const { size, name } = files;

            setShowError(false);

            if (size >= 33554432) {
                setShowError(true);

                return;
            }

            setIsResult(name);
        }

        console.log(files);

        formik.setFieldValue('file', files)
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={'grid grid-cols-12 gap-x-6 gap-y-8 mb-8'}>
                <div className={'col-span-12'}>
                    <InputSelect
                        hasError={formik.errors.country}
                        options={stateOptions}
                        name={'country'}
                        onChange={(option: any) => formik.setFieldValue('country', option.value)}
                    />
                </div>
                <div className={'col-span-12'}>
                    <InputField
                        type={'text'}
                        placeholder={'Имя'}
                        hasError={formik.errors.name}
                        name={'name'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={'col-span-12 lg:col-span-6'}>
                    <InputField
                        type={'email'}
                        hasError={formik.errors.email}
                        placeholder={'E-mail'}
                        name={'email'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        required={true}
                    />
                </div>
                <div className={'col-span-12 lg:col-span-6'}>
                    <InputNumber
                        hasError={formik.errors.number}
                        placeholder={'+7 (___) __-__-___'}
                        value={formik.values.number}
                        name={'number'}
                        onChange={formik.handleChange}
                        required={true}
                    />
                </div>
                <div className={'col-span-12'}>
                    <InputText
                        placeholder={'Оставьте пометку к заказу'}
                        name={'message'}
                        hasError={formik.errors.message}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={'col-span-12'}>
                    <InputFile
                        id={'InputFile'}
                        name={'file'}
                        hasError={formik.errors.file}
                        isResult={isResult}
                        showError={showError}
                        onChange={onChangeFile}
                    />
                </div>
            </div>
            <div className={'mb-8'}>
                <InputCheckbox
                    id={'agree'}
                    hasError={formik.errors.terms}
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    required={true}
                >
                    Даю согласие на обработку своих персональных данных
                </InputCheckbox>
            </div>
            <UiButton color={'red'} type={'submit'}>Оставить заявку</UiButton>
        </form>
    );
};

export default SubscriptionForm;
