'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { ScaleIcon } from 'lucide-react';

interface MakeOfferButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: () => {};
}

export default function MakeOfferButton({ className, disabled, onClick }: MakeOfferButtonProps) {
    return (
        <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`} variant={"secondary"} disabled={disabled} onClick={onClick}>
            <ScaleIcon size={24} />
            <span className="text-xl font-bold uppercase">Make offer</span>
        </Button>
    )
}
