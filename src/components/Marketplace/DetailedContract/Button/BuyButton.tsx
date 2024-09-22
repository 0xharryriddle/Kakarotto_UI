'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { HandshakeIcon } from 'lucide-react';

interface BuyButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: () => {};
}

export default function BuyButton({ className, disabled, onClick }: BuyButtonProps) {
    return (
        <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`} disabled={disabled} onClick={onClick}>
            <HandshakeIcon size={24} />
            <span className="text-xl font-bold uppercase">Buy</span>
        </Button>
    )
}
