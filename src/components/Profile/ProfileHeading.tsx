'use client';
import React from 'react'
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAccount } from 'wagmi';
import { CircleArrowOutUpRightIcon } from 'lucide-react';
import { truncateEthAddress } from '@/utils/address.util';

export default function ProfileHeading() {
  const { address, isConnected } = useAccount();
  return (
    <div className="flex flex-col justify-center gap-5 relative">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        width={800}
        height={400}
        className={`rounded-md w-full h-44 absolute ${isConnected ? "bottom-24" : "bottom-16"} `}
      />
      <div className="flex flex-col justify-center items-center gap-5 ml-10 mt-10 w-fit min-h-52">
        <Avatar className="lg:w-44 lg:h-44 ">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
        {isConnected && <div className='flex flex-row items-center justify-center gap-2 text-primary font-bold hover:scale-90 transition duration-200 delay-100 w-fit'>
          <span>{truncateEthAddress(address as string)}</span>
          <CircleArrowOutUpRightIcon width={16} height={16} />
        </div>}
      </div>
    </div>
  )
}
