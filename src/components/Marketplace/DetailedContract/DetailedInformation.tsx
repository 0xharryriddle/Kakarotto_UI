'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { ReactP5Wrapper, type Sketch, } from "@p5-wrapper/react";
import { ArrowLeftCircleIcon, HandshakeIcon, ScaleIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { accessToPinataImage } from '@/utils/image.util';
import LoadingTemplate from '@/components/LoadingTemplate';
import { fetchCharacterDataReturnType, fetchItemDataReturnType } from '@/contracts/utils/fetchCardData.utill';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { truncateEthAddress } from '@/utils/address.util';
import ActivityTabs from '@/components/Marketplace/DetailedContract/ActivityTab/ActivityTabs';


interface DetailedInformationProps {
    data: fetchCharacterDataReturnType | fetchItemDataReturnType | undefined;
}

export default function DetailedInformation({ data }: DetailedInformationProps) {
    const router = useRouter();
    const size = 400;
    const totalFrames = 500;

    const sketch: Sketch = (p5) => {
        let imageCanvas: any;
        p5.setup = () => {
            p5.createCanvas(700, 425, p5.WEBGL);
            imageCanvas = p5.loadImage(accessToPinataImage(data?.metadata.image));
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

    const isSale = true;

    return (
        <div className="flex flex-col justify-center gap-5 text-primary w-full h-full">
            <div className="flex flex-col justify-center gap-5 text-primary w-full h-full">
                <div className="w-full">
                    <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4' onClick={() => { router.back() }}>
                        <ArrowLeftCircleIcon size={32} />
                        <span className="text-xl font-bold">Back</span>
                    </Button>
                </div>
                <div className="w-full flex flex-row items-center justify-between gap-5">
                    <div className="rounded-lg overflow-hidden h-fit w-fit">
                        <ReactP5Wrapper sketch={sketch} loading={() => {
                            return <LoadingTemplate className='w-full' />
                        }} />
                    </div>
                    <div className="flex flex-col justify-center text-secondary gap-5 p-5 rounded-lg bg-transparent/40 w-1/2">
                        <span className='text-3xl font-bold'>{data?.metadata.name}</span>
                        <div className="flex flex-row items-center gap-2">
                            <Badge variant={"default"} className="uppercase">{data?.rarity}</Badge>
                            <Badge variant={"default"} className="uppercase">{data?.category}</Badge>
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <span className='uppercase text-secondary/60'>Description</span>
                            <span className='text-base'>{data?.metadata.description}</span>
                        </div>
                        <div className="flex flex-row items-center gap-5">
                            <div className="flex flex-col justify-center gap-5 w-1/2">
                                <span className='uppercase text-secondary/60'>Owner</span>
                                <div className="flex flex-row items-center gap-5">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className='text-lg'>{data?.owner ? truncateEthAddress(data?.owner) : "Unknown"}</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-5 w-1/2">
                                <span className='uppercase text-secondary/60'>Creator</span>
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
                            <span className="text-base">Buy this one directly through detailed price</span>
                            {
                                isSale ? <div className='flex flex-col justify-center gap-2'>
                                    <span className='uppercase text-secondary/60'>Price</span>
                                    <div className="flex flex-row items-center gap-2">
                                        <span className='text-2xl font-bold'>2000</span>
                                        <span className=''>{"($122)"}</span>
                                    </div>
                                </div> : <span>Currently not listed for sale</span>
                            }
                            <div className="flex flex-col items-center justify-center gap-3 w-full">
                                <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full'>
                                    <HandshakeIcon size={24} />
                                    <span className="text-xl font-bold uppercase">Buy</span>
                                </Button>
                                <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full' variant={"secondary"}>
                                    <ScaleIcon size={24} />
                                    <span className="text-xl font-bold uppercase">Make offer</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-4 gap-4">
                <div className="flex flex-col justify-center gap-2 h-fit">
                    <span className='uppercase font-bold text-xl'>Item details</span>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-secondary">Type</span>
                        <span className='text-secondary/60 text-base uppercase'>{data?.category}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-secondary">Network</span>
                        <span className='text-secondary/60 text-base uppercase'>{data?.category}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-secondary">Order expiration</span>
                        <span className='text-secondary/60 text-base uppercase'>{data?.category}</span>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-lg text-secondary">Owner</span>
                        <span className='text-secondary/60 text-base uppercase'>{data?.category}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-2 col-span-3">
                    <span className='uppercase font-bold text-xl'>Activity Details</span>
                    <ActivityTabs />
                </div>
            </div>
        </div>
    )
}
