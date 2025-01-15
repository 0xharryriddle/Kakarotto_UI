'use client';
import React from 'react'
import MyNFTsCard from '@/components/Marketplace/MyNFTs/MyNFTsCard';
import { useAccount } from 'wagmi';
import { getKakarottoCharacterAddress, getKakarottoItemAddress, getKakarottoTreasureAddress } from '@/contracts/utils/getAddress.util';
import { Nft } from '@/generated/graphql';

interface MyNFTsListProps {
    data?: Nft[];
    isFetched?: boolean;
}

export default function MyNFTsList({ data, isFetched }: MyNFTsListProps) {
    const { isConnected, chainId } = useAccount();

    return (
        <div className={`${isFetched && data?.length ? "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""} gap-4 w-full h-fit`
        }>
            {
                isFetched && data?.length ? data.map((item, index) => {
                    return <MyNFTsCard
                        // image={item.metadata.image} 
                        // name={item.metadata.name} 
                        // tokenId={item.tokenId} 
                        // rarity={item.rarity} 
                        // attributes={item.metadata.attributes} 
                        // account={item.account} 
                        // creator={item.creator} 
                        // category={item.category} 
                        // className="hover:scale-95 transition delay-150 duration-200 ease-in-out" 
                        // key={index} 
                        // contractAddress={
                        //     item.category == "character" ? getKakarottoCharacterAddress(chainId ? chainId : 11155111) : item.category == "item" ? getKakarottoItemAddress(chainId ? chainId : 11155111) : getKakarottoTreasureAddress(chainId ? chainId : 11155111)
                        // }
                        data={item}
                        key={index}
                        className="hover:scale-95 transition delay-150 duration-200 ease-in-out"
                    />
                }) :
                    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
                        <p className="text-lg font-bold">
                            {isConnected ? "No assets found" : "Connect your wallet to view assets"}
                        </p>
                    </div>
            }
        </div>
    )
}
