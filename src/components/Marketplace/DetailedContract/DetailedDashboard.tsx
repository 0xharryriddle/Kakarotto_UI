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
import { Character, Item } from '@/generated/graphql';
import { fetchCharacterData, fetchCharacterDataReturnType, fetchItemData, fetchItemDataReturnType } from '@/contracts/utils/fetchCardData.utill';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { client } from '@/graphql/client';

interface DetailedDashboardProps {
  contractAddress: string,
  tokenId: string,
}

interface GraphQLDataProps {
  characters: Character[];
  items: Item[];
}

export default function DetailedDashboard({ contractAddress, tokenId }: DetailedDashboardProps) {
  const { chainId } = useAccount();
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

  const { data: graphqlData, isLoading: graphqlIsLoading, error } = useQuery({
    queryKey: ['data'],
    async queryFn() {
      return await querySubgraphs({ client });
    }
  });

  useEffect(() => {
    async function fetchData() {
      if (graphqlData) {
        setLoading(true);
        setCharacterData(undefined);
        setItemData(undefined);
        const { characters, items } = graphqlData as GraphQLDataProps;
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
      const dataResult = (category == Enums.Categories.Character ? await fetchCharacterData({characters}) : Enums.Categories.Item ? await fetchItemData({items}) : []).filter((data) => data.tokenId == tokenId)[0];

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
