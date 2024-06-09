import React from 'react';
import {InputProps} from "@/components/ui/UiInput/UiInput";
import UiError from "@/components/ui/error/UiError";

interface Props extends InputProps {
    className?: string,
    classNameInput?: string,
    hasError: string
}

// eslint-disable-next-line react/display-name
const withFieldError = (Component: any): React.FC<Props> => ({ className, classNameInput, hasError, ...props }) => (
    <div className={className}>
        <Component className={classNameInput} hasError={hasError} {...props} />
        {hasError && <UiError>{hasError}</UiError>}
    </div>
);

export default withFieldError;
