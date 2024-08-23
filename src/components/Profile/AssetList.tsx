'use client';
import React from 'react'
import AssetCard from './AssetCard'
import { useAccount } from 'wagmi';

interface AssetListProps {
    data: any[];
}

export default function AssetList({ data }: AssetListProps) {
    const { isConnected } = useAccount();
    const attributes: any[] = [];

    return (
        <div className={`${data.length ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : ""} gap-4 w-full h-full`}>
            {
                data.length ? data.map((item, index) => {
                    return <AssetCard image={item.image} name={item.name} tokenId={item.tokenId} rarity={item.rarity} attributes={item.attributes} account={item.account} creator={item.creator} category={item.category} className="hover:scale-95 transition delay-150 duration-200 ease-in-out" key={index} />
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
