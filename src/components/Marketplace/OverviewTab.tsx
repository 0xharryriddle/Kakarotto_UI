'use client';
import React from 'react'
import { ArrowRightCircleIcon, ChartNoAxesCombinedIcon, InfoIcon, TagIcon } from 'lucide-react'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button'
import CarouselCard from '@/components/Marketplace/CarouselCard';
import * as Enums from '@/utils/enum.util';
import LoadingTemplate from '@/components/LoadingTemplate';
import { client } from '@/graphql/client';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { useQuery } from '@tanstack/react-query';
import { env } from "@/env/server";

interface OverviewTabProps {
    changeTabLoading: boolean;
}

export default function OverviewTab({ changeTabLoading }: OverviewTabProps) {
    const { data, status } = useQuery({
        queryKey: ['overview'],
        async queryFn() {
            return await querySubgraphs({ client });
        },
    });

    return (
        <div className="flex flex-col justify-center gap-10 p-10 h-full min-h-fit w-full" >
            <div className="flex flex-col justify-center gap-3">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center gap-2 ">
                        <span className="text-3xl font-bold text-primary">Marketplace Volume</span>
                        <span className="font-bold text-primary/50">Including Character, Items and Treasures</span>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-around px-5 py-2 border-4 bg-zinc-300 text-primary rounded-lg h-32 text-xl font-bold">
                    {changeTabLoading ? <LoadingTemplate /> : <>
                        <div className="flex flex-row items-center gap-2 w-fit">
                            <TagIcon size={32} />
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <span className='uppercase'>Total Sales</span>
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <InfoIcon size={16} />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            Supported Information.
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                                <span className="font-bold">251.36K</span>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 w-fit">
                            <ChartNoAxesCombinedIcon size={32} />
                            <div className="flex flex-col justify-center gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <span className='uppercase'>Total Volume</span>
                                    <HoverCard>
                                        <HoverCardTrigger>
                                            <InfoIcon size={16} />
                                        </HoverCardTrigger>
                                        <HoverCardContent>
                                            Supported Information.
                                        </HoverCardContent>
                                    </HoverCard>
                                </div>
                                <div className="flex flex-row items-center gap-1">
                                    {/* Icon Token */}
                                    <span className='font-bold'>363.55M</span>
                                    <span className='text-md'>$0.00M</span>
                                </div >
                            </div >

                        </div ></>}

                </div >
            </div >
            {/* Trending */}
            <div className="flex flex-col justify-center gap-5 h-fit" >
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center gap-3">
                        <span className='text-primary font-bold text-2xl'>Trending</span>
                        <span className="font-bold text-primary/50">Bestselling items over the last 24hrs 🔥</span>
                    </div>
                    <Button className='uppercase cursor-pointer bg-inherit text-primary transition delay-100 duration-200 hover:bg-inherit hover:scale-90 flex gap-2'>
                        <span>Explore All</span>
                        <ArrowRightCircleIcon size={24} />
                    </Button>
                </div>
                {changeTabLoading ? <div className="flex items-center justify-center h-44">
                    <LoadingTemplate />
                </div> : <>
                    <Carousel opts={
                        {
                            align: 'start',
                        }
                    }>
                        <CarouselContent className='py-4 w-full'>
                            {
                                Array.from({ length: 10 }).map((_, index) => {
                                    return <CarouselItem key={index} className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'>
                                        <CarouselCard image="/carrot.jpg" name="Carrot Warrior" category={Enums.Categories.Item} description="Carrot is very kind" price={1.90} rarity={Enums.Rarities.Diamond} type="" />
                                    </CarouselItem>
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </>}
            </div>
            {/* Newest */}
            <div className="flex flex-col justify-center gap-5" >
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center gap-3">
                        <span className='text-primary font-bold text-2xl'>Newest</span>
                    </div>
                    <Button className='uppercase cursor-pointer bg-inherit text-primary transition delay-100 duration-200 hover:bg-inherit hover:scale-90 flex gap-2'>
                        <span>Explore All</span>
                        <ArrowRightCircleIcon size={24} />
                    </Button>
                </div>
                {changeTabLoading ? <div className="flex items-center justify-center h-44">
                    <LoadingTemplate />
                </div> : <>
                    <Carousel opts={
                        {
                            align: 'start',
                        }
                    }>
                        <CarouselContent className='py-4 w-full'>
                            {
                                Array.from({ length: 10 }).map((_, index) => {
                                    return <CarouselItem key={index} className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'>
                                        <CarouselCard image="/carrot.jpg" name="Carrot Warrior" category={Enums.Categories.Item} description="Carrot is very kind" price={1.90} rarity={Enums.Rarities.Diamond} type="" />
                                    </CarouselItem>
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </>}

            </div>
            {/* Latest Listing */}
            <div className="flex flex-col justify-center gap-5" >
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center gap-3">
                        <span className='text-primary font-bold text-2xl'>Latest Listings</span>
                        <span className="font-bold text-primary/50">Items being resold</span>
                    </div>
                    <Button className='uppercase cursor-pointer bg-inherit text-primary transition delay-100 duration-200 hover:bg-inherit hover:scale-90 flex gap-2'>
                        <span>Explore All</span>
                        <ArrowRightCircleIcon size={24} />
                    </Button>
                </div>
                {changeTabLoading ? <div className="flex items-center justify-center h-44">
                    <LoadingTemplate />
                </div> : <>
                    <Carousel opts={
                        {
                            align: 'start',
                        }
                    }>
                        <CarouselContent className='py-4 w-full'>
                            {
                                Array.from({ length: 10 }).map((_, index) => {
                                    return <CarouselItem key={index} className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'>
                                        <CarouselCard image="/carrot.jpg" name="Carrot Warrior" category={Enums.Categories.Item} description="Carrot is very kind" price={1.90} rarity={Enums.Rarities.Diamond} type="" />
                                    </CarouselItem>
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </>}

            </div>
        </div >
    )
}

