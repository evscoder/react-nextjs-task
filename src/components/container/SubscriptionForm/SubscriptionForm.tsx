'use client'

import React from 'react';
import UiInput from "@/components/ui/UiInput/UiInput";
import withFieldError from "@/hocs/withFieldError";
import InputPhone from "@/components/ui/InputPhone/InputPhone";
import UiTextarea from "@/components/ui/UiTextarea/UiTextarea";
import UiInputFile from "@/components/ui/UiInputFile/UiInputFile";
import UiCheckbox from "@/components/ui/UiCheckbox/UiCheckbox";
import UiButton from "@/components/ui/UiButton/UiButton";
import UiSelect from "@/components/ui/UiSelect/UiSelect";
const InputSelect = withFieldError(UiSelect);
const InputField = withFieldError(UiInput);
const InputNumber = withFieldError(InputPhone);
const InputText = withFieldError(UiTextarea);
const InputFile = withFieldError(UiInputFile);
const InputCheckbox = withFieldError(UiCheckbox);
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

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: "",
            message: "",
            country: "Москва",
            terms: "",
            file: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Это обязательное поле'),
            email: Yup.string().email("Неккоректно веден адрес").required('Это обязательное поле'),
            country: Yup.string().required('Это обязательное поле'),
            terms: Yup.array().required("Terms of service must be checked")
        }),
        onSubmit: (values) => {
            console.log("form submitted");
            console.log(values);
            dispatch(formSuccess(true));
        },
    });

    return (
        <form action="#" onSubmit={formik.handleSubmit}>
            <div className={'grid grid-cols-12 gap-x-6 gap-y-8 mb-8'}>
                <div className={'col-span-12'}>
                    <InputSelect
                        hasError={formik.errors.country}
                        options={stateOptions}
                        name={'country'}
                        value={formik.values.country}
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
                        name={'message'}>
                        hasError={formik.errors.message}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        required={true}
                    </InputText>
                </div>
                <div className={'col-span-12'}>
                    <InputFile
                        id={'InputFile'}
                        name={'file'}
                        text={'Прикрепите файл'}
                        required={true}
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
