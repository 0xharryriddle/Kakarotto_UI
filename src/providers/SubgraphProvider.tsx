'use client';

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental'

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
    if (isServer) {
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

    return <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
            {children}
        </ReactQueryStreamedHydration>
    </QueryClientProvider>;
}