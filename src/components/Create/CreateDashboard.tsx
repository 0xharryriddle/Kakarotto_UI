"use client";
import React from 'react'
import Information from './Information'
import Generation from './Generation'

interface CreateDashboardProps {
}

export default function CreateDashboard({ }: CreateDashboardProps) {
    const [image, setImage] = React.useState<string | undefined>(undefined);
    const [imageLoading, setImageLoading] = React.useState<boolean>(false);
    const [imageGenerationLoading, setImageGenerationLoading] = React.useState<boolean>(false);
    const [isMinting, setIsMinting] = React.useState<boolean>(false);
    const [hash, setHash] = React.useState<string | undefined>(undefined);
    const [account, setAccount] = React.useState<string | undefined>(undefined);
    const [tokenURI, setTokenURI] = React.useState<string | undefined>(undefined);
    const [traits, setTraits] = React.useState<any>({});
    const mintLeft = 1;

    return (
        <div className='flex flex-row justify-center mt-24 w-full h-full'>
            <Information
                mintLeft={mintLeft}
                setImageLoading={setImageLoading}
                setImageGenerationLoading={setImageGenerationLoading}
                image={image}
                setImage={setImage}
                setHash={setHash}
                setAccount={setAccount}
                setTokenURI={setTokenURI}
                setTraits={setTraits}
                isMinting={isMinting}
                setIsMinting={setIsMinting}
            />
            <Generation
                imageLoading={imageLoading}
                image={image}
                hash={hash}
                account={account}
                tokenURI={tokenURI}
                traits={traits}
                isMinting={isMinting}
            />
        </div>
    )
}
