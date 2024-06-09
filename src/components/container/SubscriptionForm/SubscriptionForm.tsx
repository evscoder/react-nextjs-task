import React from 'react';
import UiInput from "@/components/ui/UiInput/UiInput";
import withFieldError from "@/hocs/withFieldError";
import InputPhone from "@/components/ui/InputPhone/InputPhone";
import UiTextarea from "@/components/ui/UiTextarea/UiTextarea";
import UiInputFile from "@/components/ui/UiInputFile/UiInputFile";
import UiCheckbox from "@/components/ui/UiCheckbox/UiCheckbox";
import UiButton from "@/components/ui/UiButton/UiButton";
const InputError = withFieldError(UiInput);
const SubscriptionForm = () => {
    return (
        <form action="#">
            <div className={'grid-cols-12'}>
                <div className={'grid-span-12'}>
                    <InputError
                        type={'text'}
                        hasError={'Поле не заполненно'}
                        placeholder={'Имя'}
                        name={'User_Name'}
                        required={true}
                    />
                </div>
                <div className={'grid-span-6'}>
                    <InputError
                        type={'email'}
                        hasError={'Поле не заполненно'}
                        placeholder={'Имя'}
                        name={'User_Name'}
                        required={true}
                    />
                </div>
                <div className={'grid-span-6'}>
                    <InputPhone
                        placeholder={'+7 (___) __-__-___'}
                    />
                </div>
                <div className={'grid-span-12'}>
                    <UiTextarea
                        placeholder={'Оставьте пометку к заказу'}
                        name={'User_Text'}>
                    </UiTextarea>
                </div>
                <div className={'grid-span-12'}>
                    <UiInputFile
                        id={'InputFile'}
                        name={'User_Files'}
                        text={'Прикрепите файл'}
                    />
                </div>
            </div>
            <div className={'grid-span-12'}>
                <UiCheckbox id={'agree'} name={'User_Agree'}>
                    Даю согласие на обработку своих персональных данных
                </UiCheckbox>
            </div>
            <UiButton color={'red'} type={'submit'}>Оставить заявку</UiButton>
        </form>
    );
};

export default SubscriptionForm;
