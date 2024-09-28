'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { BanIcon } from 'lucide-react';

import { OrderStatus } from '@/generated/graphql';

interface CancelListingButtonProps {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => {};
}

const CancelListingButton = React.forwardRef<HTMLButtonElement, CancelListingButtonProps>(
    (props, forwardedRef) => {
        const { className = '', disabled = false, loading = false, onClick } = props;

        return (
            <Button
                ref={forwardedRef}
                className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`}
                disabled={disabled}
                variant={"destructive"}
                onClick={onClick}
            >
                {
                    loading
                        ? <span className='text-xl font-bold'>Loading...</span>
                        : <>
                            <BanIcon size={24} />
                            <span className="text-xl font-bold uppercase">Cancel</span>
                        </>
                }
            </Button>
        )
    }
)

CancelListingButton.displayName = 'CancelListingButton';

export default CancelListingButton;

// export default function CancelListingButton({ className, loading = false, disabled = false, onClick }: CancelListingButtonProps) {
//     return (
//         <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`} disabled={disabled} variant={"destructive"} onClick={onClick}>
//             <BanIcon size={24} />
//             <span className="text-xl font-bold uppercase">Cancel</span>
//         </Button>
//     )
// }
