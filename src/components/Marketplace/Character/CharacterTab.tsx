'use client';
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi';
import { gql, request } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import HeaderTabTemplate from '@/components/Marketplace/Template/HeaderTabTemplate'
import { Categories } from '@/utils/enum.util';
import CategoryTabTemplate from '@/components/Marketplace/Template/CategoryTabTemplate';
import LoadingTemplate from '@/components/LoadingTemplate';
import { getKakarottoCharacterAddress } from '@/contracts/utils/getAddress.util';
import { Character } from '@/interface/graphql.interface';
import { fetchCharacterData } from '@/contracts/utils/fetchCardData.utill';

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
}`

interface CharacterTabProps {
  changeTabLoading: boolean;
}

interface GraphQLData {
  characters: Character[],
}

export default function CharacterTab({ changeTabLoading }: CharacterTabProps) {
  const { chainId } = useAccount();
  const [loading, setLoading] = useState<boolean>(false);
  const [characterData, setCharacterData] = useState<Character[]>([]);

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
        setCharacterData([]);
        const { characters } = graphqlData;
        await fetchNFTData({ characters });
        setLoading(false);
      }
    }
    fetchData();
  }, [graphqlData, changeTabLoading]);

  console.log(graphqlData);

  const fetchNFTData = async (
    {
      characters,
    }: {
      characters: Character[],
    }) => {
    try {
      const characterResult = await fetchCharacterData(characters);
      setCharacterData(characterResult);
    } catch (error) {
      console.error("Failed to fetch metadata:", error);
    }
  }

  return (
    changeTabLoading
      ? <LoadingTemplate />
      : <div className='flex flex-col gap-5 justify-center px-5 py-2'>
        <HeaderTabTemplate image={"/secret_treasure.gif"}
          name="Kakarotto Character"
          contractAddress={getKakarottoCharacterAddress(chainId) ? getKakarottoCharacterAddress(chainId) : getKakarottoCharacterAddress(11155111)}
          standard="ERC721"
          category={Categories.Character} />
        <CategoryTabTemplate
          data={characterData}
          category={Categories.Character}
          loading={loading}
          contractAddress={getKakarottoCharacterAddress(chainId) ? getKakarottoCharacterAddress(chainId) : getKakarottoCharacterAddress(11155111)} />
      </div>
  )
}
