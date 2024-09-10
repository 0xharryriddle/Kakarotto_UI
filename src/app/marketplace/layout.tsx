import HeaderTab from '@/components/Marketplace/HeaderTab';
import React from 'react'

export default function MarketplaceLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='w-full h-full min-h-dvh'>
            <HeaderTab />
            {children}
        </main>
    )
}
