import React from 'react'
import { saiyaFont, inter } from "@/styles/fonts"
import Link from 'next/link'
import NavItem from './NavItem'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PersonStandingIcon, SwordsIcon, BoxIcon, GavelIcon, BackpackIcon, ChevronDownCircleIcon, StoreIcon } from 'lucide-react'

const Nav = () => {
    return (
        <div className={` flex justify-between items-center gap-10 font-bold`
        }>
            <Link href={"/"} scroll={false} className={`${saiyaFont.className} text-3xl font-bold tracking-widest`}>
                <span>Kakarotto</span>
            </Link>
            <div className="flex flex-row flex-wrap gap-10 justify-between items-center invisible md:visible ">
                <NavItem content="Marketplace" link="/marketplace" Icon={StoreIcon} />
                <NavItem content="Treasure" link="/treasure" Icon={BoxIcon} />
                <DropdownMenu >
                    <DropdownMenuTrigger>
                        <div className="flex flex-row items-center gap-1 transition delay-100 duration-200 ease-in-out hover:scale-90">
                            <ChevronDownCircleIcon className="w-8 h-8 transition delay-100 duration-200 ease-in-out hover:scale-90" />
                            <span>Menu</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={`font-bold text-primary`} >
                        <DropdownMenuItem className='text-xl'>
                            <NavItem content="Create" link="/create" Icon={GavelIcon} />
                        </DropdownMenuItem>
                        <DropdownMenuItem className='text-xl'>
                            <NavItem content="Bag" link='/your-bag' Icon={BackpackIcon} />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div >
    )
}

export default Nav