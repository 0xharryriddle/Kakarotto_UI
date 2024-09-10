import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import React from 'react'

export default function Loading() {
    return (
        <div className='w-full h-screen flex flex-row items-center justify-center'>
            <div className="flex flex-col items-center justify-center gap-4 text-primary font-bold text-2xl">
                <CircularProgress size="100px" isIndeterminate />
                <span>Loading...</span>
            </div>
        </div>
    )
}
