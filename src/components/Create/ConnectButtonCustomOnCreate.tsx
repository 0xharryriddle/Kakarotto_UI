import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ConnectButtonCustomOnCreate() {
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
                        className={` ${!ready && "opacity-0 pointer-events-none select-none	"}`}
                    >
                        {(() => {
                            if (!connected) {
                                return;
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button onClick={openChainModal} className={`transition delay-100 duration-200 ease-in-out hover:scale-90`} >
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <div className='flex flex-col justify-center gap-5 z-30 font-bold text-xl'>
                                    <div className={`transition delay-100 duration-200 ease-in-out hover:scale-90`}>
                                        {account.displayName}
                                    </div>
                                    <div
                                        className={`flex items-center transition delay-100 duration-200 ease-in-out hover:scale-90`}
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                className='class="bg-[chain.iconBackground] w-6 h-6 rounded-full overflow-hidden mr-1'
                                            >
                                                {chain.iconUrl && (
                                                    <Image alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} width={24} height={24} />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    )
}
