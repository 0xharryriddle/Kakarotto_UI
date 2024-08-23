'use client';
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from './ui/button';

interface Web3ButtonCustomProps {
    buttonName?: string;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
}

export default function Web3ButtonCustom({ buttonName, onClick, className, type }: Web3ButtonCustomProps) {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        aria-hidden={!ready}
                        className={` ${!ready && "opacity-0 pointer-events-none select-none	"} `}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button onClick={openConnectModal} className={`cursor-default transition delay-100 duration-200 ease-in-out hover:scale-90`}>
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            return (
                                <div className='flex gap-12'>
                                    <Button onClick={onClick} className={`transition delay-100 duration-200 ease-in-out hover:scale-90 ${className}`} type={type}>
                                        {
                                            buttonName
                                        }
                                    </Button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    )
}
