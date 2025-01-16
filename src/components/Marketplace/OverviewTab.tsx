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
import * as Enums from '@/utils/type.util';
import LoadingTemplate from '@/components/LoadingTemplate';
import { client } from '@/graphql/client';
import { querySubgraphs } from '@/services/graphql/subgraphs';
import { useQuery } from '@tanstack/react-query';
import { env } from "@/env/server";
import { GET_ALL_NFTS } from '@/queries/nft';
import { Nft } from '@/generated/graphql';
import { GET_COUNT } from '@/queries/count';
import { accessToPinataImage } from '@/utils/image.util';
import fetchMetadata from '@/services/actions/fetchMetadata';

interface OverviewTabProps {
    changeTabLoading: boolean;
}

interface GraphQLDataProps {
    nfts: Nft[],
}

export default function OverviewTab({ changeTabLoading }: OverviewTabProps) {

    // Query the trending NFTs
    const {
        data: trendingNFTsData,
        isLoading: trendingNFTsIsLoading,
        status: trendingNFTsStatus,
        error: trendingNFTsError,
        isFetched: trendingNFTsIsFetched
    } = useQuery({
        queryKey: ['trendingNFTs'],
        async queryFn() {
            return await querySubgraphs({
                client,
                query: GET_ALL_NFTS,
                variables: { first: 10, skip: 0, orderBy: 'volume', orderDirection: 'desc' },
            });
        },
    });

    // Query the newest NFTs
    const {
        data: newestNFTsData,
        isLoading: newestNFTsIsLoading,
        status: newestNFTsStatus,
        error: newestNFTsError,
        isFetched: newestNFTsIsFetched
    } = useQuery({
        queryKey: ['newestNFTs'],
        async queryFn() {
            return await querySubgraphs({
                client,
                query: GET_ALL_NFTS,
                variables: { first: 10, skip: 0, orderBy: 'createdAt', orderDirection: 'desc' },
            });
        },
    });

    // Query the latest listings
    const {
        data: latestListingsData,
        isLoading: latestListingsIsLoading,
        status: latestListingsStatus,
        error: latestListingsError,
        isFetched: latestListingsIsFetched
    } = useQuery({
        queryKey: ['latestListings'],
        async queryFn() {
            return await querySubgraphs({
                client,
                query: GET_ALL_NFTS,
                variables: { first: 10, skip: 0, orderBy: 'activeOrder__createdAt', orderDirection: 'desc' },
            });
        },
    });

    // Query the count of sales and volumes
    const {
        data: countSalesAndVolumesData,
        isLoading: countSalesAndVolumesIsLoading,
        status: countSalesAndVolumesStatus,
        error: countSalesAndVolumesError,
        isFetched: countSalesAndVolumesIsFetched
    } = useQuery({
        queryKey: ['countSalesAndVolumes'],
        async queryFn() {
            return await querySubgraphs({
                client,
                query: GET_COUNT
            });
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
            <div className="flex flex-col justify-center gap-5 h-fit w-full" >
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
                {changeTabLoading ? <div className="flex items-center justify-center h-44 w-full">
                    <LoadingTemplate />
                </div> : <div className='w-full px-12'>
                    <Carousel
                        opts={
                            {
                                align: 'start',
                            }
                        }
                        className='max-w-full'
                    >
                        <CarouselContent className='py-4 max-w-full'>
                            {
                                (trendingNFTsData as GraphQLDataProps).nfts.map(async (nft, index) => {
                                    return <CarouselItem
                                        key={index}
                                        className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'
                                    >
                                        <CarouselCard
                                            //TODO: Fix the image
                                            // image="/carrot.jpg"
                                            image={
                                                accessToPinataImage({
                                                    pinataURL: (await fetchMetadata({
                                                        tokenURI: nft.tokenURI!,
                                                        isTreasure: nft.searchIsTreasure,
                                                        tokenId: nft.tokenId
                                                    })).image
                                                })
                                            }
                                            name={nft.name || "Unknown"}
                                            category={nft.category}
                                            // TODO: Fix the description
                                            description="Carrot is very kind"
                                            price={nft.searchOrderPrice || 0}
                                            rarity={nft.rarity!}
                                            type={""}
                                            className='w-full'
                                        />
                                    </CarouselItem>
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>}
            </div >
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
                {
                    changeTabLoading ? <div className="flex items-center justify-center h-44">
                        <LoadingTemplate />
                    </div> : <div className='w-full px-12'>
                        <Carousel
                            opts={
                                {
                                    align: 'start',
                                }
                            }
                            className='max-w-full'
                        >
                            <CarouselContent className='py-4 w-fit self-center'>
                                {
                                    (newestNFTsData as GraphQLDataProps).nfts.map(async (nft, index) => {
                                        return <CarouselItem
                                            key={index}
                                            className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'>
                                            <CarouselCard
                                                //TODO: Fix the image
                                                // image="/carrot.jpg"
                                                image={
                                                    accessToPinataImage({
                                                        pinataURL: (await fetchMetadata({
                                                            tokenURI: nft.tokenURI!,
                                                            isTreasure: nft.searchIsTreasure,
                                                            tokenId: nft.tokenId
                                                        })).image
                                                    })
                                                }
                                                name={nft.name || "Unknown"}
                                                category={nft.category}
                                                // TODO: Fix the description
                                                description="Carrot is very kind"
                                                price={nft.searchOrderPrice || 0}
                                                rarity={nft.rarity!}
                                                type={""}
                                            />
                                        </CarouselItem>
                                    })
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                }

            </div>
            {/* Latest Listing */}
            < div className="flex flex-col justify-center gap-5" >
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
                {
                    changeTabLoading ? <div className="flex items-center justify-center h-44">
                        <LoadingTemplate />
                    </div> : <div className='w-full px-12'>
                        <Carousel
                            opts={
                                {
                                    align: 'start',
                                }
                            }
                            className='max-w-full'
                        >
                            <CarouselContent className='py-4 w-full'>
                                {
                                    (latestListingsData as GraphQLDataProps).nfts.map(async (nft, index) => {
                                        return <CarouselItem
                                            key={index}
                                            className='basis-1/5 hover:-translate-y-4 cursor-pointer transition duration-150 delay-200'>
                                            <CarouselCard
                                                //TODO: Fix the image
                                                // image="/carrot.jpg"
                                                image={
                                                    accessToPinataImage({
                                                        pinataURL: (await fetchMetadata({
                                                            tokenURI: nft.tokenURI!,
                                                            isTreasure: nft.searchIsTreasure,
                                                            tokenId: nft.tokenId
                                                        })).image
                                                    })
                                                }
                                                name={nft.name || "Unknown"}
                                                category={nft.category}
                                                // TODO: Fix the description
                                                description="Carrot is very kind"
                                                price={nft.searchOrderPrice || 0}
                                                rarity={nft.rarity!}
                                                type={""}
                                            />
                                        </CarouselItem>
                                    })
                                }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                }
            </div >
        </div >
    )
}

