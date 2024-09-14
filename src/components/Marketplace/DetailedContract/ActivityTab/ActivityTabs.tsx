'use client';
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function ActivityTabs() {
    return (
        <Tabs variant={"solid-rounded"} className='bg-transparent/25 p-5 rounded-lg w-full m-0'>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div className="h-96">
                        <p>one!</p>
                    </div>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
