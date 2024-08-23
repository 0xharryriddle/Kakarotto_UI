import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function LoadingTemplate() {
    return (
        <div className='h-screen flex flex-row items-center justify-center w-fit'>
            <div className="flex flex-col items-center justify-center gap-4 text-primary font-bold text-2xl">
                <CircularProgress size="50px" isIndeterminate />
                <span>Loading...</span>
            </div>
        </div>
    )
}
