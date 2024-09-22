import React from 'react'
import Image from 'next/image';
import gif from "@/../public/goku_vegeta_broly.gif";
import { saiyaFont, inter } from "@/styles/fonts"
import { Button } from '@/components/ui/button';
import CardCollection from './CardCollection';
import carrot from "@/../public/carrot.jpg";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Introduction = () => {
    return (
        <div className="flex flex-col items-center w-full h-auto text-primary">
            <div className="flex flex-col items-center gap-5 m-10 rounded-lg max-w-[1200px]">
                <div className={`${saiyaFont.className} relative rounded-lg tracking-widest group transition delay-125 duration-250 ease-in-out`}>
                    {/* Inner content */}
                    <div className="relative">
                        <div className="absolute top-0 bottom-0 right-0 left-0 p-4 bg-opacity-50 rounded-lg text-center flex flex-col items-center justify-center text-8xl gap-5 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
                            <span className='text-primary'>Kakarotto</span>
                            <Button className='text-2xl h-auto' disabled={true}>
                                Play now<br /> (Coming Soon)
                            </Button>
                        </div>
                        <Image
                            src={gif}
                            alt='goku_vegeta_broly'
                            width={1200}
                            height={300}
                            className='rounded-lg transition-all duration-300 ease-in-out group-hover:blur-md'
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="flex flex-row w-full h-auto items-center justify-between rounded-lg gap-5 px-5 text-2xl">
                    <span className={`${saiyaFont.className} font-bold text-5xl tracking-widest`}>Collections</span>
                    <div className="grid grid-cols-3 gap-5">
                        <CardCollection imagePath={`${process.env.NEXT_PUBLIC_IPFS_URL}/${process.env.NEXT_PUBLIC_CHARACTER_FOLDER_CID}/Represent.png?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`} imageAlt={'Character'} gameName={'Kakarotto Adventure'} collectionName={"Character"} numberListing={111} />
                        <CardCollection imagePath={carrot} imageAlt={'Items'} gameName={'Kakarotto Adventure'} collectionName={"Items"} numberListing={111} />
                        <CardCollection imagePath={`${process.env.NEXT_PUBLIC_IPFS_URL}/${process.env.NEXT_PUBLIC_TREASURE_FOLDER_CID}/TreasureChest.gif?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`} imageAlt={'Treasure'} gameName={'Kakarotto Adventure'} collectionName={"Treasure"} numberListing={111} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-5 mb-10 min-w-[1200px] text-primary">
                <span className={`${saiyaFont.className} font-bold text-5xl tracking-widest`}>How does it work ?</span>
                <div className="flex flex-col justify-center p-5 gap-5 border-2 border-opacity-20 border-primary rounded-lg bg-secondary max-w-[1200px]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Introduction