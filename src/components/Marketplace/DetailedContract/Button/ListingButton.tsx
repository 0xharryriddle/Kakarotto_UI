'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { RocketIcon } from 'lucide-react';

interface ListingButtonProps {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => {};
    relisting: boolean;
}

const ListingButton = React.forwardRef<HTMLButtonElement, ListingButtonProps>(
    (props, forwardedRef) => {
        const { className = '', loading = false, disabled = false, onClick, relisting } = props;

        return (
            <Button
                ref={forwardedRef}
                className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`}
                disabled={disabled}
                onClick={onClick}
            >
                {loading
                    ? (
                        <span className='text-xl font-bold'>Loading...</span>
                    ) : (
                        <>
                            <RocketIcon size={24} />
                            <span className="text-xl font-bold uppercase">
                                {relisting ? 'Relisting' : 'Listing'}
                            </span>
                        </>
                    )}
            </Button>
        );
    }
);

ListingButton.displayName = 'ListingButton';

export default ListingButton;