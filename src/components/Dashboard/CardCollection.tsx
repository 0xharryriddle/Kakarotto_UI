import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { saiyaFont, inter } from "@/styles/fonts"

const CardCollection = ({ imagePath, imageAlt, gameName, collectionName, numberListing }: { imagePath: any, imageAlt: string, gameName: string, collectionName: any, numberListing: any }) => {
    return (
        <Card className={` bg-zinc-100 font-bold transition delay-125 duration-250 ease-in-out hover:scale-105`}>
            <Image src={imagePath} alt={imageAlt} className='rounded-t-lg' width={240} height={240} />
            <CardContent className='flex flex-col gap-2 justify-center mt-2'>
                <p className='text-primary text-lg'>{gameName}</p>
                <p className='text-2xl'>{collectionName}</p>
            </CardContent>
            <CardFooter>
                <p className='text-lg opacity-70'>{`${numberListing} Listings`}</p>
            </CardFooter>
        </Card>

    )
}

export default CardCollection