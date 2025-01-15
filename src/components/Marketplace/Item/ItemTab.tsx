'use client';
import React, { useEffect, useState } from 'react'
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/type.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { useAccount } from 'wagmi';
import { Item } from '@/generated/graphql';
import { useQuery } from '@tanstack/react-query'
import { fetchItemData } from '@/contracts/utils/fetchCardData.utill';
import { getKakarottoItemAddress } from '@/contracts/utils/getAddress.util';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { client } from '@/graphql/client';
import { GET_ALL_ITEMS } from '@/queries/item';

interface ItemTabProps {
  changeTabLoading: boolean;
}

interface GraphQLDataProps {
  items: Item[],
}

export default function ItemTab({ changeTabLoading }: ItemTabProps) {
  const { chainId } = useAccount();

  const {
    data: queryData,
    isLoading: queryIsLoading,
    status: queryStatus,
    error: queryError,
    isFetched: queryIsFetched
  } = useQuery({
    queryKey: ['items'],
    async queryFn() {
      return await querySubgraphs({ client, query: GET_ALL_ITEMS })
    }
  });

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
          data={queryData ? (queryData as GraphQLDataProps).items : []}
          loading={queryIsLoading}
          category={Categories.Item}
          contractAddress={getKakarottoItemAddress(chainId) ? getKakarottoItemAddress(chainId) : getKakarottoItemAddress(11155111)} />
      </div>
  )
}
