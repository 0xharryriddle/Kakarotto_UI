'use client';
import React, { useState, useEffect } from 'react'
import { notFound } from 'next/navigation';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { getKakarottoCharacterAddress, getKakarottoItemAddress } from '@/contracts/utils/getAddress.util';
import { useAccount } from 'wagmi';
import DetailedInformation from './DetailedInformation';
import DetailedOrder from './DetailedOrder';
import * as Enums from '@/utils/enum.util';
import { Character, Item } from '@/interface/graphql.interface';
import { fetchCharacterData, fetchItemData } from '@/contracts/utils/fetchCardData.utill';

const subgraph_url: string = process.env.NEXT_PUBLIC_SUBGRAPH_URL || ""

const query = ({ category, tokenId }: { category: Enums.Categories, tokenId: string }) => {
  return category == Enums.Categories.Character ? gql`{
    characters (where: {nft_: {tokenId: "${tokenId}"}}){
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
    }` : category == Enums.Categories.Item ? gql`{
    items (where: {nft_: {tokenId: "${tokenId}"}}){
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
}` : gql``;
}

interface DetailedDashboardProps {
  contractAddress: string,
  tokenId: string,
}

interface GraphQLData {
  data: any[];
}

export default function DetailedDashboard({ contractAddress, tokenId }: DetailedDashboardProps) {
  const { chainId, address, isConnected } = useAccount();
  const category = contractAddress === getKakarottoCharacterAddress(chainId ? chainId : 11155111) ? Enums.Categories.Character : contractAddress === getKakarottoItemAddress(chainId ? chainId : 11155111) ? Enums.Categories.Item : null;

  if (category == null) {
    notFound();
  }

  const [loading, setLoading] = useState<boolean>(false);
  const [nftInfo, setNftInfo] = useState<{
    id: string,
    image: string,
    metadata: any,

  }>();
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [itemData, setItemData] = useState<Item[]>([]);

  const { data: graphqlData, isLoading: graphqlIsLoading, error } = useQuery<GraphQLData>({
    queryKey: ['data'],
    async queryFn() {
      return await request(subgraph_url, query({ category, tokenId }));
    }
  });

  useEffect(() => {
    async function fetchData() {
      if (graphqlData) {
        setLoading(true);
        if (category == Enums.Categories.Character) {
          setCharacterData([]);
          setItemData([]);
          const characters = (graphqlData.data) as Character[];
          await fetchNFTData({ characters, category, items: [] });
        }
        else if (category == Enums.Categories.Item) {
          setCharacterData([]);
          setItemData([]);
          const items = (graphqlData.data) as Item[];
          await fetchNFTData({ characters: [], category, items });
        }
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData]);

  const fetchNFTData = async (
    {
      characters,
      items,
      category
    }: {
      characters: Character[],
      items: Item[],
      category: Enums.Categories
    }) => {
    try {
      const dataResult = category == Enums.Categories.Character ? await fetchCharacterData(characters) : Enums.Categories.Item ? await fetchItemData(items) : [];
      category == Enums.Categories.Character ? setCharacterData(dataResult) : category == Enums.Categories.Item ? setItemData(dataResult) : [];
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }


  return <div className="flex flex-col items-center justify-center gap-5 px-14 py-10">
    <DetailedInformation image={"https://magenta-neighbouring-crane-680.mypinata.cloud/ipfs/QmNigdTYwjBX6otd4KtBzWnPejtDbr1A1aVyDa4Q1fJnuT"} category={category} />
    <DetailedOrder />
  </div>
}
