'use client';
import React, { useState, useEffect } from 'react'
import { gql, request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import OverviewTab from '@/components/Marketplace/OverviewTab'
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import { Categories } from '@/utils/enum.util';
import MyListsTab from '@/components/Marketplace/MyLists/MyListsTab';
import MyNFTsTab from '@/components/Marketplace/MyNFTs/MyNFTsTab';
import CharacterTab from '@/components/Marketplace/Character/CharacterTab';
import ItemTab from '@/components/Marketplace/Item/ItemTab';
import { Account, Character, NFT, Treasure, TreasureAccount, Item } from '@/interface/graphql.interface';
import { fetchCharacterData, fetchItemData, fetchTreasureData } from '@/contracts/utils/fetchCardData.utill';

const subgraph_url: string = process.env.NEXT_PUBLIC_SUBGRAPH_URL || ""

const query = gql`{
    characters {
      characterAccount {
        id
        contractAddress
      }
      nft {
        id
        creator
        owner {
          address
        }
        tokenId
        tokenURI
        contractAddress
        category
        amount
        rarity
        orders {
          id
          category
          tokenId
          transactionHash
          owner
          buyer
          price
          status
          createdAt
          expiresAt
          updatedAt
        }
        bids {
          id
          category
          tokenId
          bidder
          seller
          price
          status
          expiresAt
          createdAt
          updatedAt
        }
        activeOrder {
          id
          category
          tokenId
          transactionHash
          owner
          buyer
          price
          status
          createdAt
          expiresAt
          updatedAt
        }
        searchOwner
      }
      attributes {
        attribute
        value
      }
      level
      exp
    }
    treasureAccounts {
      treasure {
        tokenId
        tokenURI
        nft {
          id
          tokenId
          tokenURI
          contractAddress
          category
          amount
          rarity
          orders {
            id
            category
            tokenId
            transactionHash
            owner
            buyer
            price
            status
            createdAt
            expiresAt
            updatedAt
          }
          bids {
            id
            category
            tokenId
            bidder
            seller
            price
            status
            expiresAt
            createdAt
            updatedAt
          }
          activeOrder {
            id
            category
            tokenId
            transactionHash
            owner
            buyer
            price
            status
            createdAt
            expiresAt
            updatedAt
          }
        }
      }
      balance
    }
    items {
      nft {
        id
        creator
        owner {
          address
        }
        tokenId
        tokenURI
        contractAddress
        category
        amount
        rarity
        orders {
          id
          category
          tokenId
          transactionHash
          owner
          buyer
          price
          status
          createdAt
          expiresAt
          updatedAt
        }
        bids {
          id
          category
          tokenId
          bidder
          seller
          price
          status
          expiresAt
          createdAt
          updatedAt
        }
        activeOrder {
          id
          category
          tokenId
          transactionHash
          owner
          buyer
          price
          status
          createdAt
          expiresAt
          updatedAt
        }
      }
      attributes {
        attribute
        value
        isIncrease
        isPercentage
      } 
    }
  }`;

interface MarketplaceDashboardProps {
}

interface GraphQLData {
  characters: Character[],
  treasureAccounts: TreasureAccount[],
  items: Item[]
}

export default function MarketplaceDashboard({
}: MarketplaceDashboardProps) {
  const [loading, setLoading] = useState<boolean>(false);


  return (
    <main className='w-full h-full min-h-dvh'>
      <Tabs size={"lg"} colorScheme="orange" isFitted
        onChange={() => {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
          }, 2000)
        }}
      >
        <TabList className='text-secondary font-bold focus:text-primary'>
          <Tab className='hover:cursor-pointer'>Overview</Tab>
          <Tab className='hover:cursor-pointer'>Character</Tab>
          <Tab className='hover:cursor-pointer'>Item</Tab>
          <Tab className='hover:cursor-pointer'>My Lists</Tab>
          <Tab className='hover:cursor-pointer'>My NFTs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className='w-full h-full'>
            <OverviewTab changeTabLoading={loading} />
          </TabPanel>
          <TabPanel className='w-full h-full'>
            {/* <CharacterTab changeTabLoading={loading} charactersData={nftData.character} /> */}
          </TabPanel>
          <TabPanel className='w-full h-full'>
            {/* <CategoryTabTemplate image={"/secret_treasure.gif"}
                            name="Kakarotto Items"
                            contractAddress="0xaa"
                            standard="ERC721"
                            category={Categories.Item}
                            listingsData={[]}
                            totalListings={0}
                            loading={loading} /> */}
            <ItemTab changeTabLoading={loading} />
          </TabPanel>
          <TabPanel className='w-full h-full'>
            {/* <MyListsTab changeTabLoading={loading}/> */}
          </TabPanel>
          <TabPanel className='w-full h-full'>
            {/* <MyNFTsTab changeTabLoading={loading}/> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>

  )
}
