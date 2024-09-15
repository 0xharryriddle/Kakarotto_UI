'use client';
import React, { useEffect, useState } from 'react'
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/enum.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { useAccount } from 'wagmi';
import { Item } from '@/interface/graphql.interface';
import { gql, request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import { fetchItemData } from '@/contracts/utils/fetchCardData.utill';
import { getKakarottoCharacterAddress, getKakarottoItemAddress } from '@/contracts/utils/getAddress.util';

const subgraph_url: string = process.env.NEXT_PUBLIC_ROOT_URI || ""

const query = gql`{
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

interface ItemTabProps {
  changeTabLoading: boolean;
}

interface GraphQLData {
  items: Item[],
}


export default function ItemTab({ changeTabLoading }: ItemTabProps) {
  const { chainId } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [itemData, setItemData] = useState<Item[]>([]);

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
        setItemData([]);
        const { items } = graphqlData;
        await fetchNFTData({ items });
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData]);

  const fetchNFTData = async (
    {
      items,
    }: {
      items: Item[],
    }) => {
    try {
      const itemResult = await fetchItemData(items);
      setItemData(itemResult);
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return (
    changeTabLoading
      ? <LoadingTemplate />
      : <div className='flex flex-col gap-5 justify-center px-5 py-2'>
        <HeaderTabTemplate image={"/secret_treasure.gif"}
          name="Kakarotto Item"
          contractAddress={getKakarottoItemAddress(chainId) ? getKakarottoItemAddress(chainId) : getKakarottoItemAddress(11155111)}
          standard="ERC721"
          category={Categories.Item} />
        <CategoryTabTemplate
          data={itemData}
          loading={loading}
          category={Categories.Item}
          contractAddress={getKakarottoItemAddress(chainId) ? getKakarottoItemAddress(chainId) : getKakarottoItemAddress(11155111)} />
      </div>
  )
}
