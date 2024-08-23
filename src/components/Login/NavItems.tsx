"use client";
import React from 'react'
import ConnectButtonCustom from './ConnectButtonCustom';
import MobileNav from '../Header/MobileNav'
import { ModeToggle } from '../Header/ModeToggle'
import Faucet from '../Header/Faucet';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAccount } from 'wagmi';

export default function NavItems() {
    const { isConnected } = useAccount();

    return (
        <div className="flex flex-row justify-between items-center gap-10">
            {/* <Faucet /> */}
            <ConnectButtonCustom />
            <Link href="/profile" className={`${!isConnected && "invisible"} cursor-cursorGauntlet transition delay-100 duration-200 ease-in-out hover:scale-90`}>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </Link>
            {/* <ModeToggle /> */}
            {/* <MobileNav triggerStyle="md:invisible" /> */}
        </div>
    )
}
