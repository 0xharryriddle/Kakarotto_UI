'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeftCircleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DisplayedInformation() {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-5 items-center justify-center px-5 py-3 text-primary w-full h-full">
            <Button variant={"link"} onClick={() => router.back()} className="space-x-2 absolute top-5 left-5">
                <ArrowLeftCircleIcon size={16} />
                <span>Back</span>
            </Button>
        </div>
    )
}
