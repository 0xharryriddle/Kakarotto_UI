'use client';
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { Character, TreasureAccount, Item } from '@/interface/graphql.interface';
import { useAccount } from 'wagmi';
import ConnectButtonTab from '@/components/ConnectButtonTab';
import LoadingTemplate from '@/components/LoadingTemplate';
import MyNFTsHeading from '@/components/Marketplace/MyNFTs/MyNFTsHeading';
import MyNFTsBody from '@/components/Marketplace/MyNFTs/MyNFTsBody';
import { fetchCharacterData, fetchItemData, fetchTreasureData } from '@/contracts/utils/fetchCardData.utill';

const subgraph_url: string = process.env.NEXT_PUBLIC_SUBGRAPH_URL || ""

const query = gql` {
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
  }`

interface MyNFTsTabProps {
  changeTabLoading?: boolean;
}

interface GraphQLData {
  characters: Character[];
  items: Item[];
  treasureAccounts: TreasureAccount[];
}

export default function MyNFTsTab({ changeTabLoading }: MyNFTsTabProps) {
  const { isConnected } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [nftData, setNftData] = useState<{
    all: any[],
    characters: Character[],
    items: Item[],
    treasures: TreasureAccount[],
  }>({
    all: [],
    characters: [],
    items: [],
    treasures: []
  });

  const { data: graphqlData, isLoading: graphqlIsLoading, error } = useQuery<GraphQLData>({
    queryKey: ['data'],
    async queryFn() {
      return await request(subgraph_url, query);
    }
  });

  useEffect(() => {
    async function fetchData() {
      if (graphqlData) {
        setLoading(true);
        setNftData({
          all: [],
          characters: [],
          items: [],
          treasures: []
        });
        const { characters, items, treasureAccounts } = graphqlData;
        await fetchNFTData({ characters, items, treasureAccounts });
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData]);

  const fetchNFTData = async (
    {
      characters,
      items,
      treasureAccounts,
    }: {
      characters: Character[],
      items: Item[],
      treasureAccounts: TreasureAccount[],
    }) => {
    try {
      const characterResult = await fetchCharacterData(characters);
      const itemResult = await fetchItemData(items);
      const treasureResult = await fetchTreasureData(treasureAccounts);
      setNftData({
        all: [...characterResult, ...itemResult, ...treasureResult],
        characters: characterResult,
        items: itemResult,
        treasures: treasureResult
      });
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return (
    !isConnected ? <ConnectButtonTab className='py-20' /> : changeTabLoading ? <LoadingTemplate /> : <div className="w-full h-full flex flex-col justify-center p-5 gap-5">
      <MyNFTsHeading />
      <MyNFTsBody nftData={nftData} loadingData={loading} />
    </div>
  )
}
