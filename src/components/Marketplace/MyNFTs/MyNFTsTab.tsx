'use client';
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Nft } from '@/generated/graphql';
import { useAccount } from 'wagmi';
import ConnectButtonTab from '@/components/ConnectButtonTab';
import MyNFTsBody from '@/components/Marketplace/MyNFTs/MyNFTsBody';
import { client } from '@/graphql/client';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { GET_NFT_BY_OWNER } from '@/queries/nft';
import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { CircleArrowOutUpRightIcon } from 'lucide-react';
import { truncateHash } from '@/utils/address.util';
import { zeroAddress } from 'viem';

interface MyNFTsTabProps {
}

interface GraphQLDataProps {
  nfts: Nft[],
}

export default function MyNFTsTab({ }: MyNFTsTabProps) {
  const { isConnected, address } = useAccount();

  const {
    data: queryData,
    isLoading: queryIsLoading,
    status: queryStatus,
    error: queryError,
    isFetched: queryIsFetched
  } = useQuery({
    queryKey: [
      "nfts"
    ],
    async queryFn() {
      return await querySubgraphs({
        client,
        query: GET_NFT_BY_OWNER,
        variables: { searchOwner: address?.toLocaleLowerCase() }
      });
    },
    enabled: isConnected && address ? true : false,
  });

  return (
    !isConnected
      ? <ConnectButtonTab className='py-20' />
      : <div className="w-full h-full flex flex-col justify-center p-5 gap-5">
        {/* Heading */}
        <div className="flex flex-col justify-center gap-5 relative">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            width={800}
            height={400}
            className={`rounded-md w-full h-44 absolute ${isConnected ? "bottom-24" : "bottom-16"} `}
            loading="lazy"
          />
          <div className="flex flex-col justify-center items-center gap-5 ml-10 mt-10 w-fit min-h-52">
            <Avatar className="lg:w-44 lg:h-44 ">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            {isConnected && <div className='flex flex-row items-center justify-center gap-2 text-primary font-bold hover:scale-90 transition duration-200 delay-100 w-fit'>
              <span>{truncateHash(address || zeroAddress)}</span>
              <CircleArrowOutUpRightIcon width={16} height={16} />
            </div>}
          </div>
        </div>
        <MyNFTsBody data={queryData ? (queryData as GraphQLDataProps).nfts : undefined} dataIsFetched={queryIsFetched} loadingData={queryIsLoading} />
      </div>
  )
}
