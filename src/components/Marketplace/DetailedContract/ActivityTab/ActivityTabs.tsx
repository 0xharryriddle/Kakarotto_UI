'use client';
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import OffersTab from './Offers/OffersTab';
import SalesTab from './Sales/SalesTab';
import { Bid, Character, Item } from '@/generated/graphql';
import * as Enums from "@/utils/enum.util";

interface ActivityTabs {
    items: Item[],
    characters: Character[],
    category: Enums.Categories,
}

const bids: Bid[] = [
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "open",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "cancelled",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
    {
        id: "id01",
        category: "character",
        tokenId: "0",
        bidder: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        seller: "0x5984a519fffe5afc5e8bba233dcc01ac774f4301",
        price: "10000000000000000000",
        status: "sold",
        expiresAt: "1727664289",
        createdAt: "1725936289",
        updatedAt: "1758415489",
        bidAddress: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
        blockchainId: "11155111",
        blockNumber: "11111111",
        nftAddress: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
    },
]

export default function ActivityTabs() {
    return (
        <Tabs variant={"solid-rounded"} className='bg-transparent/40 p-5 rounded-lg w-full m-0'>
            <TabList>
                <Tab>Offers</Tab>
                <Tab>Listings</Tab>
                <Tab>Sales</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <OffersTab loading={false} bids={bids} />
                </TabPanel>
                <TabPanel></TabPanel>
                <TabPanel>
                    <SalesTab />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
