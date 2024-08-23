import * as React from 'react'
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';

export const ChakraUIProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (<CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>)
}