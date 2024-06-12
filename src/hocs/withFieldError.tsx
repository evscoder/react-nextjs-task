import React from 'react';
import UiError from "@/components/ui/Error/UiError";
import cn from "clsx";

export interface WithFieldErrorProps {
    className?: string;
    classNameInput?: string;
    hasError?: string | undefined | boolean;
};

const withFieldError = <T extends WithFieldErrorProps>(Component: React.ComponentType<T & WithFieldErrorProps>) => {
    const WrappedComponent = ({ className, classNameInput, hasError, ...props }: T) => (
        <div className={cn(hasError && 'error', className)}>
            <Component {...props as T} />
            {hasError && <UiError>{hasError}</UiError>}
        </div>
    );

    WrappedComponent.displayName = `withFieldError(${Component.displayName || Component.name || 'Component'})`;

    return WrappedComponent;
};

export default withFieldError;
