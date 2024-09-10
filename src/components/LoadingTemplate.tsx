import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

interface LoadingTemplateProps {
    className?: string;
}

export default function LoadingTemplate({ className }: LoadingTemplateProps) {
    return (
        <div className={`flex flex-row items-center justify-center ${className ? className : "w-fit"}`}>
            <div className={`flex flex-col items-center justify-center gap-4 text-primary font-bold text-3xl `}>
                <CircularProgress size="70px" isIndeterminate />
                <span>Loading...</span>
            </div>
        </div>
    )
}
