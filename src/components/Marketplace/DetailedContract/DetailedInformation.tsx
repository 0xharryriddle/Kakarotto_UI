'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import { type Sketch } from "@p5-wrapper/react";

import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { ArrowLeftCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fetchCharacterDataReturnType, fetchItemDataReturnType } from '@/contracts/utils/fetchCardData.utill';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { truncateEthAddress } from '@/utils/address.util';
import ActivityTabs from '@/components/Marketplace/DetailedContract/ActivityTab/ActivityTabs';
import { useAccount } from 'wagmi';
import { formatEther, getAddress, isAddressEqual } from 'viem';
import ListingDialog from './Dialog/ListingDialog';
import CancelListingDialog from './Dialog/CancelListingDialog';
import { isExpired, timeLeft } from '@/utils/date.util';
import BuyDialog from './Dialog/BuyDialog';
import OfferDialog from './Dialog/OfferDialog';
import * as Enums from "@/utils/enum.util";
import { Sale } from '@/generated/graphql';

interface DetailedInformationProps {
    // loading: boolean;
    data?: fetchCharacterDataReturnType | fetchItemDataReturnType;
    sales?: Sale[],
    imageURL: string;
    category: Enums.Categories;
}

export default function DetailedInformation({ data, imageURL, category, sales }: DetailedInformationProps) {
    const { address, chain } = useAccount();
    const router = useRouter();
    const size = 400;
    const totalFrames = 500;

    const sketch: Sketch = (p5) => {
        let imageCanvas: any;
        p5.setup = () => {
            p5.createCanvas(700, 425, p5.WEBGL);
            imageCanvas = p5.loadImage(imageURL, (image) => {
                p5.redraw();
            });
        };

        p5.draw = () => {
            p5.background(250);
            p5.push();
            const biggestImageDimension =
                imageCanvas.width > imageCanvas.height ? imageCanvas.width : imageCanvas.height;
            p5.texture(imageCanvas);
            p5.scale((size / biggestImageDimension) * .73);
            p5.rotateY(p5.frameCount * ((2 * Math.PI) / totalFrames));
            p5.plane(imageCanvas.width, imageCanvas.height);
            p5.pop();
        };
    };

    console.log(sales);

    return (<div className="flex flex-col justify-center gap-5 text-primary w-full h-full">
        <div className="flex flex-col justify-center gap-5 text-primary w-full h-full">
            <div className="w-full">
                <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4' onClick={() => { router.back() }}>
                    <ArrowLeftCircleIcon size={32} />
                    <span className="text-xl font-bold">Back</span>
                </Button>
            </div>
            <div className="w-full flex flex-row justify-between gap-5">
                <div className="rounded-lg overflow-hidden h-fit w-fit">
                    <NextReactP5Wrapper sketch={sketch} />
                </div>
                <div className="flex flex-col justify-center text-secondary gap-5 p-5 rounded-lg bg-transparent/40 w-1/2">
                    <span className='text-3xl font-bold'>{data?.metadata.name}</span>
                    <div className="flex flex-row items-center gap-2">
                        <Badge variant={"default"} className="uppercase">{data?.rarity}</Badge>
                        <Badge variant={"default"} className="uppercase">{data?.category}</Badge>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <span className='uppercase text-secondary/60 font-bold'>Description</span>
                        <span className='text-base'>{data?.metadata.description}</span>
                    </div>
                    <div className="flex flex-row items-center gap-5">
                        <div className="flex flex-col justify-center gap-5 w-1/2">
                            <span className='uppercase text-secondary/60 font-bold'>Owner</span>
                            <div className="flex flex-row items-center gap-5">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className='text-lg'>{data?.owner ? truncateEthAddress(data?.owner) : "Unknown"}</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-5 w-1/2">
                            <span className='uppercase text-secondary/60 font-bold'>Creator</span>
                            <div className="flex flex-row items-center gap-5">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span className='text-lg'>{data?.creator ? truncateEthAddress(data?.creator) : "Unknown"}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center self-center rounded-lg p-5 bg-transparent/30 w-full gap-3">
                        {
                            address != null &&
                                data?.owner && // Ensure data?.owner exists
                                isAddressEqual(address, data.owner as `0x${string}`)
                                ? <div className="flex flex-col items-center justify-center gap-3 w-full">
                                    <ListingDialog
                                        searchOrderStatus={data?.nft.searchOrderStatus}
                                        contractAddress={data.nft.contractAddress}
                                        tokenId={data?.nft.tokenId}
                                        searchOrderExpiresAt={data?.nft.searchOrderExpiresAt ? parseInt(data?.nft.searchOrderExpiresAt) : undefined}
                                        category={category}
                                    />
                                    <CancelListingDialog
                                        searchOrderStatus={data?.nft.searchOrderStatus}
                                        searchOrderExpiresAt={data?.nft.searchOrderExpiresAt ? parseInt(data?.nft.searchOrderExpiresAt) : undefined}
                                        contractAddress={data.nft.contractAddress}
                                        tokenId={data?.nft.tokenId}
                                    />
                                </div>
                                : <>
                                    <span className="text-base">Buy this one directly through detailed price</span>
                                    {
                                        data?.nft.searchOrderStatus == 'open' && data?.nft.activeOrder && !isExpired(data?.nft.searchOrderExpiresAt) ? <div className='flex flex-col justify-center gap-2'>
                                            <span className='uppercase text-secondary/60'>Price</span>
                                            <div className="flex flex-row items-center gap-2">
                                                <span className='text-2xl font-bold'>{formatEther(data?.nft.activeOrder.price)}</span>
                                                <span className=''>{"($)"}</span>
                                            </div>
                                        </div> : <span>Currently not listed for sale</span>
                                    }
                                    <div className="flex flex-col items-center justify-center gap-3 w-full">
                                        {/* Buy */}
                                        <BuyDialog
                                            searchOrderStatus={data?.nft.searchOrderStatus}
                                            contractAddress={data?.nft.contractAddress}
                                            tokenId={data?.nft.tokenId}
                                            searchOrderExpiresAt={data?.nft.searchOrderExpiresAt ? parseInt(data?.nft.searchOrderExpiresAt) : undefined}
                                            priceInWei={BigInt(data?.nft.searchOrderPrice ? data?.nft.searchOrderPrice : 0)}
                                            category={category}
                                            rarity={data?.rarity}
                                        />
                                        {/* Make Offer */}
                                        <OfferDialog
                                            searchOrderStatus={data?.nft.searchOrderStatus}
                                            contractAddress={data?.nft.contractAddress}
                                            tokenId={data?.nft.tokenId}
                                            searchOrderExpiresAt={data?.nft.searchOrderExpiresAt ? parseInt(data?.nft.searchOrderExpiresAt) : undefined}
                                            owner={data?.owner as `0x${string}`}
                                            image={''}
                                            priceInWei={BigInt(data?.nft.searchOrderPrice ? data?.nft.searchOrderPrice : 0)}
                                            attributes={data?.attributes ? data?.attributes : []}
                                        />
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
            <div className="flex flex-col justify-center gap-2 h-fit">
                <span className='uppercase font-bold text-xl ml-5'>Item details</span>
                <div className="flex flex-col justify-center gap-2 h-fit bg-secondary p-5 rounded-lg font-bold">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-foreground">Type</span>
                        <span className='text-foreground/60 text-base uppercase'>{data?.category}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-foreground">Network</span>
                        <span className='text-foreground/60 text-base uppercase'>{chain?.name}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-foreground">Order expiration</span>
                        <span className='text-foreground/60 text-base uppercase'>{timeLeft(parseInt(data?.nft.searchOrderExpiresAt))}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-foreground">Owner</span>
                        <span className='text-foreground/60 text-base uppercase'>{data?.nft.searchOwner ? truncateEthAddress(data?.nft.searchOwner || "") : "Unknown"}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-2 col-span-3">
                <span className='uppercase font-bold text-xl ml-5'>Activity Details</span>
                <ActivityTabs bids={data?.nft.bids ? data?.nft.bids.filter(item => item.tokenId == data?.tokenId) : []} orders={data?.nft.orders ? data?.nft.orders.filter(item => item.tokenId == data?.tokenId) : []} sales={sales} />
            </div>
        </div>
    </div>
    )
}
