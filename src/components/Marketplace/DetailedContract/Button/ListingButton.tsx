'use client';
import React from 'react'
import { Button } from '@/components/ui/button';
import { RocketIcon } from 'lucide-react';
import LoadingTemplate from '@/components/LoadingTemplate';

interface ListingButtonProps {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => {};
    relisting: boolean;
}

export default function ListingButton({ className, loading = false, disabled = false, onClick, relisting }: ListingButtonProps) {


    return (
        <Button className={`transition delay-100 duration-200 ease-in-out hover:scale-90 hover:cursor-pointer space-x-2 p-4 w-full ${className}`} disabled={disabled} onClick={onClick}>
            {
                loading ? <LoadingTemplate /> : <><RocketIcon size={24} />
                    <span className="text-xl font-bold uppercase">
                        {
                            relisting ? "Relisting" : "Listing"
                        }
                    </span></>
            }
        </Button>
    )
}
