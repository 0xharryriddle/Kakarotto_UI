"use client";
import React from "react";

// Provider
import ThemeProvider from "@/providers/ThemeProvider";
import Web3ModalProvider from "@/providers/Web3ModalProvider";
import ChakraUIProvider from "@/providers/ChakraUIProvider";
import SubgraphProvider from "@/providers/SubgraphProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <ChakraUIProvider>
                <Web3ModalProvider>
                    <SubgraphProvider>{children}</SubgraphProvider>
                </Web3ModalProvider>
            </ChakraUIProvider>
        </ThemeProvider>
    );
};

export default Providers;
