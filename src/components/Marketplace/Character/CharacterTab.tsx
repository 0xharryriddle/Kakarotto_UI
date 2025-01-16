'use client';
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/type.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { getKakarottoCharacterAddress } from '@/contracts/utils/getAddress.util';
import { client } from '@/graphql/client';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { Character } from '@/generated/graphql';
import { GET_ALL_CHARACTERS } from '@/queries/character';
import { useQuery } from '@tanstack/react-query'

interface CharacterTabProps {
  changeTabLoading: boolean;
}

interface GraphQLDataProps {
  characters: Character[]
}

export default function CharacterTab({ changeTabLoading }: CharacterTabProps) {
  const { chainId } = useAccount();

  // Query all characters
  const {
    data: queryData,
    isLoading: queryIsLoading,
    status: queryStatus,
    error: queryError,
    isFetched: queryIsFetched
  } = useQuery({
    queryKey: ['characters'],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_ALL_CHARACTERS
      });
    }
  });

  return (
    changeTabLoading
      ? <LoadingTemplate />
      : <div className='flex flex-col gap-5 justify-center px-5 py-2'>
        <HeaderTabTemplate image={"/secret_treasure.gif"}
          name="Kakarotto Character"
          contractAddress={
            getKakarottoCharacterAddress(chainId)
              ? getKakarottoCharacterAddress(chainId)
              : getKakarottoCharacterAddress(11155111)
          }
          standard="ERC721"
          category={Categories.Character} />
        <CategoryTabTemplate
          queryData={
            (queryData as GraphQLDataProps).characters
              ? (queryData as GraphQLDataProps).characters
              : []
          }
          queryIsLoading={queryIsLoading}
          category={"character"}
          contractAddress={
            getKakarottoCharacterAddress(chainId)
              ? getKakarottoCharacterAddress(chainId)
              : getKakarottoCharacterAddress(11155111)
          }
        />
      </div>
  )
}
