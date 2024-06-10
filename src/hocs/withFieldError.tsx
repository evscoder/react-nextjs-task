import React from 'react';
import UiError from "@/components/ui/Error/UiError";
import cn from "clsx";

// eslint-disable-next-line react/display-name
const withFieldError = (Component: any): React.FC<any> => ({ className, classNameInput, hasError, ...props }) => (
    <div className={cn(hasError && 'error', className)}>
        <Component className={classNameInput} {...props} />
        {hasError && <UiError>{hasError}</UiError>}
    </div>
);

export default withFieldError;
