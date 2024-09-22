'use client';
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import OffersTab from './Offers/OffersTab';
import SoldTab from './Sold/SoldTab';

export default function ActivityTabs() {
    return (
        <Tabs variant={"solid-rounded"} className='bg-transparent/40 p-5 rounded-lg w-full m-0'>
            <TabList>
                <Tab>Offers</Tab>
                <Tab>Sold</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <OffersTab loading={false} />
                </TabPanel>
                <TabPanel>
                    <SoldTab />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
