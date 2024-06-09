import React from 'react';
import ReactInputMask from 'react-input-mask';
import UiInput from "@/components/ui/UiInput/UiInput";
interface InputPhoneProps {
    placeholder: string
}

const InputPhone: React.FC<InputPhoneProps> = ({ ...props }) => {
    return (
        <ReactInputMask mask="+7 (999) 999 99 99" {...props}>
            <UiInput />
        </ReactInputMask>
    );
};

export default InputPhone;
