'use client';
import React, { useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import OverviewTab from './OverviewTab'

interface MarketplaceDashboardProps {
}

export default function MarketplaceDashboard({
}: MarketplaceDashboardProps) {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <div className='w-full h-full'>
            <Tabs size={"lg"} colorScheme="orange" isFitted onChange={() => {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                }, 2000)
            }}>
                <TabList className='text-secondary font-bold focus:text-primary'>
                    <Tab className='hover:cursor-pointer'>Overview</Tab>
                    <Tab className='hover:cursor-pointer'>Character</Tab>
                    <Tab className='hover:cursor-pointer'>Item</Tab>
                    <Tab className='hover:cursor-pointer'>Treasure</Tab>
                    <Tab className='hover:cursor-pointer'>My Lists</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <OverviewTab loading={loading} />
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>

    )
}
