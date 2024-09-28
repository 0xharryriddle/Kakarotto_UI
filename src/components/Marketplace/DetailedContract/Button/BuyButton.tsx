'use client';
import React from 'react'
import { Button } from '@/components/ui/button';

interface BuyButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: () => {};
    children?: React.ReactNode;
}

const BuyButton = React.forwardRef<HTMLButtonElement, BuyButtonProps>(
    (props, forwardedRef) => {
        const {
            className = '',
            disabled = false,
            onClick,
            children
        } = props;

        return (
            <Button
                ref={forwardedRef}
                className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </Button>
        )
    }
)

BuyButton.displayName = 'BuyButton';

export default BuyButton;