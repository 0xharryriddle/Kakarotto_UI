import { wagmiConfig } from '../config/rainbow.config';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {
    RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

export default function Web3ModalProvider (
    { children }: { children: React.ReactNode }
) {
    const queryClient = new QueryClient();

    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}