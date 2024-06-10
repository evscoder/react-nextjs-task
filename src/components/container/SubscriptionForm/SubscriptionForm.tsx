import React from 'react';
import UiInput from "@/components/ui/UiInput/UiInput";
import withFieldError from "@/hocs/withFieldError";
import InputPhone from "@/components/ui/InputPhone/InputPhone";
import UiTextarea from "@/components/ui/UiTextarea/UiTextarea";
import UiInputFile from "@/components/ui/UiInputFile/UiInputFile";
import UiCheckbox from "@/components/ui/UiCheckbox/UiCheckbox";
import UiButton from "@/components/ui/UiButton/UiButton";
import UiSelect from "@/components/ui/UiSelect/UiSelect";
const InputError = withFieldError(UiInput);

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
    return (
        <form action="#">
            <div className={'grid grid-cols-12 gap-x-6 gap-y-8 mb-8'}>
                <div className={'col-span-12'}>
                    <UiSelect options={stateOptions}/>
                </div>
                <div className={'col-span-12'}>
                    <InputError
                        type={'text'}
                        hasError={'Поле не заполненно'}
                        placeholder={'Имя'}
                        name={'User_Name'}
                        required={true}
                    />
                </div>
                <div className={'col-span-12 lg:col-span-6'}>
                    <InputError
                        type={'email'}
                        hasError={'Поле не заполненно'}
                        placeholder={'Имя'}
                        name={'User_Name'}
                        required={true}
                    />
                </div>
                <div className={'col-span-12 lg:col-span-6'}>
                    <InputPhone
                        placeholder={'+7 (___) __-__-___'}
                    />
                </div>
                <div className={'col-span-12'}>
                    <UiTextarea
                        placeholder={'Оставьте пометку к заказу'}
                        name={'User_Text'}>
                    </UiTextarea>
                </div>
                <div className={'col-span-12'}>
                    <UiInputFile
                        id={'InputFile'}
                        name={'User_Files'}
                        text={'Прикрепите файл'}
                    />
                </div>
            </div>
            <div className={'mb-8'}>
                <UiCheckbox id={'agree'} name={'User_Agree'}>
                    Даю согласие на обработку своих персональных данных
                </UiCheckbox>
            </div>
            <UiButton color={'red'} type={'submit'}>Оставить заявку</UiButton>
        </form>
    );
};

export default SubscriptionForm;
