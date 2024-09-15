'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function buildQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    });
}
let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
    if (typeof window === 'undefined') {
        return buildQueryClient();
    } else {
        if (!browserQueryClient) {
            browserQueryClient = buildQueryClient();
        }

        return browserQueryClient;
    }
}

export default function SubgraphProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const queryClient = getQueryClient();

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}