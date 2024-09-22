"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { saiyaFont, inter } from "@/styles/fonts"

export default function ConnectButtonCustom() {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
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
                                    <Button onClick={openConnectModal} className={`cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90`}>
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button onClick={openChainModal} className={`cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90`} >
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div className='flex gap-12'>
                                    <Button
                                        onClick={openChainModal}
                                        type="button"
                                        className={`cursor-pointer flex items-center transition delay-100 duration-200 ease-in-out hover:scale-90`}
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                className='bg-[chain.iconBackground] w-6 h-6 rounded-full overflow-hidden mr-1'
                                            >
                                                {chain.iconUrl && (
                                                    <Image alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} width={24} height={24} loading="lazy" />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </Button>
                                    <Button onClick={openAccountModal} className={`cursor-pointer transition delay-100 duration-200 ease-in-out hover:scale-90`}>
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </Button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};