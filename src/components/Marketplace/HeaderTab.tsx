'use client';
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from 'next/navigation';

const tabData = [
    { name: 'Overview', link: '/marketplace', value: 'overview' },
    { name: 'Character', link: '/marketplace/characters', value: 'characters' },
    { name: 'Item', link: '/marketplace/items', value: 'items' },
    { name: 'My Lists', link: '/marketplace/my-listings', value: 'my-listings' },
    { name: 'My NFTs', link: '/marketplace/my-nfts', value: 'my-nfts' }
]

export default function HeaderTab() {
    const pathName = usePathname();

    const [currentTab, setCurrentTab] = React.useState(
        tabData.find((tab) => pathName == tab.link)?.value || null
    );

    useEffect(() => {
        setCurrentTab(tabData.find((tab) => pathName == tab.link)?.value || null)
    }, [pathName])

    return (
        <div className="w-full">
            <Tabs value={currentTab == null ? undefined : currentTab} className="w-full text-primary rounded-none bg-gray-800" onValueChange={(value) => setCurrentTab(value)} asChild>
                <TabsList>
                    {
                        tabData.map((tab, index) => (
                            <Link key={index} href={tab.link} className='w-full text-xl font-bold cursor-pointer' legacyBehavior>
                                <TabsTrigger value={tab.value} className={`w-full text-xl font-bold cursor-pointer transition delay-100 duration-200 ease-in-out ${currentTab != tab.value && `hover:scale-90`}`}>
                                    {tab.name}
                                </TabsTrigger>
                            </Link>
                        ))
                    }
                </TabsList>
            </Tabs>
        </div>
    )
}
