'use client';
import React, { useState, useEffect } from 'react'
import { notFound } from 'next/navigation';
import { useAccount } from 'wagmi';
import { useQuery } from '@tanstack/react-query'

import * as Enums from '@/utils/type.util';
import { getKakarottoCharacterAddress, getKakarottoItemAddress } from '@/contracts/utils/getAddress.util';
import DetailedInformation from '@/components/Marketplace/DetailedContract/DetailedInformation';
import { Character, Item, Sale } from '@/generated/graphql';
import { fetchCharacterData, fetchCharacterDataReturnType, fetchItemData, fetchItemDataReturnType } from '@/contracts/utils/fetchCardData.utill';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { client } from '@/graphql/client';
import { accessToPinataImage } from '@/utils/image.util';
import Loading from '@/app/loading';
import { GET_NFT_BY_TOKEN_ID } from '@/queries/nft';

interface DetailedDashboardProps {
  contractAddress: string,
  tokenId: string,
}

interface GraphQLDataProps {
  sales: Sale[];
  characters: Character[];
  items: Item[];
}

export default function DetailedDashboard({ contractAddress, tokenId }: DetailedDashboardProps) {
  const { chainId } = useAccount();
  const category = contractAddress === getKakarottoCharacterAddress(chainId ? chainId : 11155111) ? Enums.Categories.Character : contractAddress === getKakarottoItemAddress(chainId ? chainId : 11155111) ? Enums.Categories.Item : null;

  if (category == null) {
    notFound();
  }

  const [saleData, setSaleData] = useState<Sale[]>();
  const [characterData, setCharacterData] = useState<fetchCharacterDataReturnType>();
  const [itemData, setItemData] = useState<fetchItemDataReturnType>();

  const { data: graphqlData, isLoading: graphqlIsLoading, isFetching: graphqlIsFetching, isError: graphqlIsError, error: graphqlError, refetch: graphqlRefetch } = useQuery({
    queryKey: ['details'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_NFT_BY_TOKEN_ID,
        variables: {
          tokenId
        }
      });
    },
  });

  if (graphqlIsLoading) {
    return <Loading />
  }

  return <div className="flex flex-col items-center justify-center gap-5 px-14 py-10">
    <DetailedInformation
      data={
        category == Enums.Categories.Character
          ? characterData
          : category == Enums.Categories.Item
            ? itemData
            : undefined}
      imageURL={
        accessToPinataImage(category == Enums.Categories.Character
          ? characterData?.metadata.image
          : category == Enums.Categories.Item
            ? itemData?.metadata.image
            : "")}
      category={category}
      sales={saleData}
    />
  </div>
}
