'use client';
import React from 'react'
import { useAccount } from 'wagmi';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AArrowDownIcon, AArrowUpIcon } from 'lucide-react';
import CarouselCard from '@/components/Marketplace/CarouselCard';
import { Categories } from '@/utils/type.util';
import ConnectButtonTab from '@/components/ConnectButtonTab';
import * as Enums from '@/utils/type.util';

interface MyListsTabProps {
    loading?: boolean;
}

export default function MyListsTab({ loading }: MyListsTabProps) {
    const { address, isConnected, chainId } = useAccount();
    const listingAmount = 0;

    return (
        isConnected ? <div className='w-full h-full flex flex-col gap-5 text-secondary px-10 py-5'>
            <div className='w-full h-full text-4xl font-bold'>My lists</div>
            <div className="flex flex-row items-center justify-between">
                <span>{listingAmount} list</span>
                <div className="flex flex-row items-center justify-center gap-5">
                    <span>Sort by</span>
                    <Select>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Sorting" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="nameIncreasing">
                                Name
                                <AArrowUpIcon size={16} />
                            </SelectItem>
                            <SelectItem value="nameDecreasing">
                                Name
                                <AArrowDownIcon size={16} />
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 w-full h-full">
                {
                    Array.from({ length: 13 }).map((_, index) => {
                        return <CarouselCard
                            key={index}
                            image="/carrot.jpg"
                            name="Carrot Warrior"
                            category="item"
                            description="Carrot is very kind"
                            price={1.90}
                            rarity="diamond"
                            type=""
                            className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'
                        />
                    })
                }
            </div>
        </div> : <ConnectButtonTab />
    )
}
