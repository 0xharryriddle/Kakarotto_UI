'use client';
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import OffersTab from './Offers/OffersTab';
import SalesTab from './Sales/SalesTab';
import { Bid, Order, Sale } from '@/generated/graphql';
import * as Enums from "@/utils/enum.util";
import ListingsTab from './Listings/ListingsTab';

interface ActivityTabs {
    bids: Bid[],
    orders: Order[]
    sales?: Sale[]
}

export default function ActivityTabs({ bids, orders, sales }: ActivityTabs) {
    console.log(bids);
    return (
        <Tabs variant={"solid-rounded"} className='bg-transparent/40 p-5 rounded-lg w-full m-0'>
            <TabList>
                <Tab>Offers</Tab>
                <Tab>Listings</Tab>
                <Tab>Sales</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <OffersTab
                        loading={false}
                        // bids={bids.length % 5 ? bids : [...bids, ...Array(5 - (bids.length % 5)).fill(null)]}
                        bids={bids}
                    />
                </TabPanel>
                <TabPanel>
                    <ListingsTab
                        loading={false}
                        // orders={orders.length % 5 ? orders : [...orders, ...Array(5 - (orders.length % 5)).fill(null)]}
                        orders={orders}
                    />
                </TabPanel>
                <TabPanel>
                    <SalesTab
                        loading={false}
                        data={sales}
                    />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
