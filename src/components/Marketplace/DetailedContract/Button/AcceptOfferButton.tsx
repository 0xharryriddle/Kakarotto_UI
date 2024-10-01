'use client';
import { Button } from '@/components/ui/button';
import { HandshakeIcon } from 'lucide-react';
import React from 'react'

interface AcceptOfferButtonProps {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => {};
}

const AcceptOfferButton = React.forwardRef<HTMLButtonElement, AcceptOfferButtonProps>(
    (props, forwardedRef) => {
        const {
            className = '',
            disabled = false,
            loading = false,
            onClick
        } = props;

        return (
            <Button
                ref={forwardedRef}
                className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`}
                disabled={disabled}
                onClick={onClick}
            >
                {
                    loading
                        ? <span className='text-xl font-bold'>Loading...</span>
                        : <>
                            <HandshakeIcon size={24} />
                            <span className="text-xl font-bold uppercase">
                                Accept offer
                            </span>
                        </>
                }
            </Button>
        )
    }
);

AcceptOfferButton.displayName = 'AcceptOfferButton';

export default AcceptOfferButton;