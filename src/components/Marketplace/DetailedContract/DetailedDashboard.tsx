'use client';
import React, { useState, useEffect } from 'react'
import { notFound } from 'next/navigation';
import { gql, request } from 'graphql-request'
import { useAccount } from 'wagmi';
import { useQuery } from '@tanstack/react-query'

import * as Enums from '@/utils/enum.util';
import { getKakarottoCharacterAddress, getKakarottoItemAddress } from '@/contracts/utils/getAddress.util';
import DetailedInformation from '@/components/Marketplace/DetailedContract/DetailedInformation';
import DetailedOrder from '@/components/Marketplace/DetailedContract/DetailedOrder';
import { Character, Item } from '@/interface/graphql.interface';
import { fetchCharacterData, fetchCharacterDataReturnType, fetchItemData, fetchItemDataReturnType } from '@/contracts/utils/fetchCardData.utill';

const subgraph_url: string = process.env.NEXT_PUBLIC_ROOT_URI || ""

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

interface DetailedDashboardProps {
  contractAddress: string,
  tokenId: string,
}

interface GraphQLData {
  characters: Character[];
  items: Item[];
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
  const [characterData, setCharacterData] = useState<fetchCharacterDataReturnType>();
  const [itemData, setItemData] = useState<fetchItemDataReturnType>();

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
        setCharacterData(undefined);
        setItemData(undefined);
        const { characters, items } = graphqlData;
        await fetchNFTData({ characters: characters, category, items });
        setLoading(false);
      }
    }
    fetchData();
  }, [category, graphqlData]);

  const fetchNFTData = async (
    {
      characters,
      items,
      category
    }: {
      characters: Character[],
      items: Item[],
      category: Enums.Categories | null,
    }) => {
    try {
      const dataResult = (category == Enums.Categories.Character ? await fetchCharacterData(characters) : Enums.Categories.Item ? await fetchItemData(items) : []).filter((data) => data.tokenId == tokenId)[0];

      category == Enums.Categories.Character ? setCharacterData(dataResult) : category == Enums.Categories.Item ? setItemData(dataResult) : [];
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return <div className="flex flex-col items-center justify-center gap-5 px-14 py-10">
    <DetailedInformation data={category == Enums.Categories.Character ? characterData : category == Enums.Categories.Item ? itemData : undefined} />
    <DetailedOrder />
  </div>
}
