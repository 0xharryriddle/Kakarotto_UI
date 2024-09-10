import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignJustifyIcon } from 'lucide-react'
import ConnectButtonCustom from '@/components/Login/ConnectButtonCustom'


const MobileNav = ({ triggerStyle }: { triggerStyle: any }) => {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger className={triggerStyle}>
                <AlignJustifyIcon className="w-8 h-8 transition delay-100 duration-200 ease-in-out hover:scale-90" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-32'>
                <DropdownMenuItem>Character</DropdownMenuItem>
                <DropdownMenuItem>Items</DropdownMenuItem>
                <DropdownMenuItem>Treasure</DropdownMenuItem>
                <ConnectButtonCustom />
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default MobileNav