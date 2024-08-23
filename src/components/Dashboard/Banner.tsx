'use client';
import React from 'react'
import { saiyaFont, inter } from "@/styles/fonts"
import { Button } from '../ui/button'
import { ChevronsDownIcon } from 'lucide-react'

function Banner() {
    return (
        <div className={`${saiyaFont.className} bg-banner bg-center bg-no-repeat bg-cover min-w-max min-h-screen flex flex-col gap-5 justify-center items-center text-6xl text-primary`} >
            <div className="flex flex-col gap-2 items-center mb-10 ">
                <span className='drop-shadow-2xl shadow-white animate-[wiggle_1s_ease-in-out_infinite]'>Trading your gaming NFTs everywhere with ease</span>
                <span className='drop-shadow-2xl shadow-white animate-bounce'>Explore all our game collections and checkout using crypto</span>
            </div>

            <div className={`${inter.className} flex flex-row items-center gap-5`} >
                <Button className='text-xl transition delay-100 duration-200 ease-in-out hover:scale-90'>Explore now</Button>
                <Button className='text-xl transition delay-100 duration-200 ease-in-out hover:scale-90'>Learn more</Button>
            </div>
            <ChevronsDownIcon className='text-primary motion-safe:animate-bounce ' size={50} />
        </div >
    )
}

export default Banner