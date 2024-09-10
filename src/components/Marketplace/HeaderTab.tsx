'use client';
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from 'next/navigation';

const tabData = [
    { name: 'Overview', link: '/marketplace', value: 'overview' },
    { name: 'Character', link: '/marketplace/characters', value: 'characters' },
    { name: 'Item', link: '/marketplace/items', value: 'items' },
    { name: 'My Lists', link: '/marketplace/my_listings', value: 'my_listings' },
    { name: 'My NFTs', link: '/marketplace/my_nfts', value: 'my_nfts' }
]

export default function HeaderTab() {
    const pathName = usePathname();

    const [currentTab, setCurrentTab] = React.useState(
        tabData.find((tab) => pathName == tab.link)?.value || 'overview'
    );

    useEffect(() => {
        setCurrentTab(tabData.find((tab) => pathName == tab.link)?.value || 'overview')
    }, [pathName])

    return (
        <div className="w-full">
            <Tabs value={currentTab} className="w-full text-primary" onValueChange={(value) => setCurrentTab(value)} asChild>
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
