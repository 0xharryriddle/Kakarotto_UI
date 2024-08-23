import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";
import "./fonts.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Kakarotto Marketplace",
  description: "Marketplace for Kakarotto NFTs Card Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700`}>
        <Providers>
          <Header />
          <main>
            {children}
            <Toaster />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
