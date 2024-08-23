import React from 'react'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react';

interface NavItemProps {
    content: string;
    Icon?: LucideIcon;
    link: string;
    isDropdown?: boolean;
}

export default function NavItem({
    content, Icon, link, isDropdown
}: NavItemProps) {
    return (
        <div className="flex">
            <Link href={link} className="cursor-cursorGauntlet transition delay-100 duration-200 ease-in-out hover:scale-90 rounded-lg flex flex-row gap-1 items-center">
                {Icon && <Icon size={24} />}
                <span>{content}</span>
            </Link>
        </div>
    )
}
