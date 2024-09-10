'use client';
import React from 'react'
import ConnectButtonCustom from '@/components/Login/ConnectButtonCustom';
import { Wallet2Icon, WalletIcon } from 'lucide-react';

interface ConnectButtonTabProps {
    className?: string;
}

export default function ConnectButtonTab({ className }: ConnectButtonTabProps) {
    return (
        <div className={`flex flex-col justify-center items-center gap-5 text-secondary font-bold  h-full w-full ${className}`}>
            <span className="text-2xl">Get started</span>
            <div className="rounded-full p-5 bg-primary/60">
                <Wallet2Icon size={64} />
            </div>
            <span className="text-secondary/70 ">You can use <span className="text-primary">Metamask</span> wallet to login</span>
            <ConnectButtonCustom />
        </div>
    )
}
