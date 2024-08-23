"use client";
import React from "react";

// Theme Provider
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Web3ModalProvider } from "@/providers/Web3ModalProvider";
import { ChakraUIProvider } from "@/providers/ChakraUIProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <ChakraUIProvider>
                <Web3ModalProvider>{children}</Web3ModalProvider>
            </ChakraUIProvider>
        </ThemeProvider>
    );
};

export default Providers;
