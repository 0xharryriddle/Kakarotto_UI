
import React, { useEffect } from 'react'
import { Gamepad2Icon } from 'lucide-react'
import { useAccount, useReadContract, useWatchContractEvent, useWriteContract, useSignMessage } from 'wagmi';
import { decodeEventLog, encodePacked, keccak256, toBytes, DecodeEventLogReturnType, toHex } from 'viem';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Faucet from '../Header/Faucet';
import ConnectButtonCustomOnCreate from './ConnectButtonCustomOnCreate';
import { Button } from '../ui/button';
import { useToast } from '@chakra-ui/react'
import { generateImage } from '@/services/actions/getCharacterImage';
import { createNFTAPI } from '@/services/actions/createNFTCharacter';
import createNFTCharacterMeta from '@/services/actions/createNFTCharacterMeta';
import getABI from '@/contracts/utils/getAbi.util';
import { getKakarottoCharacterAddress } from '@/contracts/utils/getAddress.util';
import ConnectButtonCustom from '../Login/ConnectButtonCustom';
import { getCharacterAction } from '@/contracts/utils/getContractAction.util';

interface InformationProps {
    mintLeft: number;
    setImageLoading: (loading: boolean) => void;
    setImageGenerationLoading: (loading: boolean) => void;
    image: string | undefined;
    setImage: (image: string | undefined) => void;
    setHash: (hash: string | undefined) => void;
    setAccount: (account: string | undefined) => void;
    setIpfsHash: (ipfsHash: string | undefined) => void;
    setAttributes: (attributes: any) => void;
    isMinting: boolean;
    setIsMinting: (minting: boolean) => void;
}

export default function Information(
    {
        mintLeft,
        setImageLoading,
        setImageGenerationLoading,
        image,
        setImage,
        setHash,
        setAccount,
        setIpfsHash,
        setAttributes,
        isMinting,
        setIsMinting
    }: InformationProps
) {
    const { isConnected, address, chainId } = useAccount();
    const [isGenerating, setIsGenerating] = React.useState<boolean>(false);
    const toast = useToast();
    const { isError: signMessageIsError, reset: signMessageReset, signMessageAsync } = useSignMessage();
    const tokenBalance = 100;

    const resetStates = React.useCallback(() => {
        setImage(undefined);
        setImageLoading(false);
        setImageGenerationLoading(false);
        setIsMinting(false);
        setHash(undefined);
        setAccount(undefined);
        setIsGenerating(false);
        signMessageReset();
    }, [signMessageReset]);

    useEffect(() => {
        resetStates();
    }, [resetStates]);

    const signMessageCreateNFT = async ({ tokenURI, creator }: { tokenURI: string, creator: `0x${string}` }): Promise<any> => {
        try {
            const MINT_ACTION = getCharacterAction("MINT_ACTION");
            const signature = await signMessageAsync({
                message: {
                    raw: toBytes(
                        keccak256(
                            encodePacked(
                                ["bytes32", "string", "address"],
                                [MINT_ACTION, tokenURI, creator]
                            )
                        )
                    )
                }
            });
            return signature;
        } catch (error) {
            console.log("Error signing message: ", error);
            return undefined;
        }

    };

    const generateConditional = (): boolean => {
        return image !== undefined;
    };

    const mintConditional = (): boolean => {
        if (!isConnected) return true;
        if (!image) return true;
        if (mintLeft === 0) return true;
        if (!generateConditional()) return true;
        return isMinting;
    };

    useWatchContractEvent({
        address: getKakarottoCharacterAddress(chainId),
        abi: getABI("KakarottoCharacter"),
        eventName: "KakarottoCharacterCreated",
        onLogs(logs) {
            const eventDecoded = decodeEventLog({
                abi: getABI("KakarottoCharacter"),
                data: logs[0].data,
                topics: logs[0].topics,
            });
            console.log(eventDecoded);
            const args = (eventDecoded as DecodeEventLogReturnType).args;
            if (args?.at(2) == address) {
                setIsMinting(false);
                // Call the API to save to the database
                console.log("NFT minted successfully");
            }
        }
    });

    return (
        <div className='flex flex-col gap-5 pl-10 pt-10 w-1/2'>
            <div className="flex flex-col justify-center gap-5">
                <span className='font-bold text-4xl text-primary'>Mint your Kakarotto Character</span>
                <div className="flex flex-row items-center gap-1">
                    <span className='opacity-50 '>
                        This NFT is used to access Kakarotto Game in the future
                    </span>
                    <Gamepad2Icon />
                </div>
                {isConnected
                    ?
                    <div className={`relative flex flex-row items-center justify-between gap-5 border-2 border-primary rounded-lg p-3 overflow-hidden min-h-24 h-full`}>
                        <div className="flex flex-row items-center justify-between gap-3">
                            <Avatar className='z-5'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <ConnectButtonCustomOnCreate />
                        </div>
                        <span className='border-2 border-secondary text-secondary rounded-full p-3 bg-primary'>Connected</span>

                    </div>
                    :
                    <div className={`relative flex flex-row items-center justify-between gap-5 border-2 border-primary rounded-lg p-3 overflow-hidden min-h-24`}>
                        <div className={`${isConnected ? "invisible" : "visible"} absolute inset-0 bg-secondary/100 blur-lg z-10`}></div>
                        <div className={`${isConnected ? "invisible" : "visible"} absolute inset-0 z-20 flex items-center justify-center`}>
                            <ConnectButtonCustom />
                        </div>
                    </div>}

            </div>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col justify-center gap-2">
                    <span className='text-2xl font-bold text-primary'>Faucet token (
                        {mintLeft}
                        /1)</span>
                    <span className='opacity-60'>{`Your token balance: ${tokenBalance} KKR`}</span>
                </div>
                <Faucet />
            </div>
            <div className="flex flex-row items-center justify-between">
                <span>Generate Image</span>
                <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90' disabled={generateConditional()} onClick={async () => {
                    setImage(undefined);
                    setImageLoading(true);
                    try {
                        const imageResponse = await generateImage();
                        if (imageResponse && imageResponse.data) {
                            setImage(imageResponse.data);
                            toast({
                                title: "Generate image Successfully!",
                                status: "success",
                                duration: 2500,
                                isClosable: true,
                                position: "bottom-right"
                            });
                        } else {
                            toast({
                                title: "Generate image failed!",
                                description: "Please try again later",
                                status: "error",
                                duration: 2500,
                                isClosable: true,
                                position: "bottom-right"
                            });
                        }
                    } catch (error) {
                        console.error("Error generating image:", error);
                        toast({
                            title: "Generate image failed!",
                            description: "Please try again later",
                            status: "error",
                            duration: 2500,
                            isClosable: true,
                            position: "bottom-right"
                        });
                    } finally {
                        setImageLoading(false);

                    }
                }}
                >Generate Image</Button>
            </div>
            <div className="flex flex-row items-center justify-between">
                <span>Generate and Mint NFT</span>
                <Button className='transition delay-100 duration-200 ease-in-out hover:scale-90' disabled={mintConditional()} onClick={async () => {
                    setIsMinting(true);
                    if (!image) {
                        toast({
                            title: "Generate image first!",
                            description: "Please generate image before minting",
                            status: "error",
                            duration: 2500,
                            isClosable: true,
                            position: "bottom-right"
                        });
                        return;
                    }
                    // Generate Metadata
                    const metadata = await createNFTCharacterMeta({
                        fileName: address ? address : "0x",
                        name: "Kakarotto Character",
                        description: "Kakarotto is comming to the world",
                        image: image
                    })
                    // Sign Create NFT
                    const signature = await signMessageCreateNFT({ tokenURI: `${metadata.data.ipfsHash}`, creator: address ? address : "0x" });
                    // Call the API to create the NFT
                    const relay = await createNFTAPI({
                        creator: address ? address : "0x",
                        createNFTSignature: signature,
                        rarityNumber: metadata.data.attributesData.rarityNumber,
                        attributes: metadata.data.attributesData.attributes,
                        ipfsHash: metadata.data.ipfsHash,
                        networkId: chainId ? chainId : 0
                    });
                    if (relay == undefined || relay.error) {
                        // Error toast
                        toast({
                            title: "Create NFT failed !",
                            description: "Please try again later",
                            status: "error",
                            duration: 2500,
                            isClosable: true,
                            position: "bottom-right"
                        });
                        resetStates();
                        return;
                    }
                    setIpfsHash(relay.data.ipfsHash);
                    setAccount(relay.data.account);
                    setHash(relay.data.txHash);
                    const attributes = {
                        ...relay.data.attributes,
                        rarity: relay.data.rarityNumber
                    };
                    setAttributes(attributes);
                    setIsMinting(false);
                }}
                >Mint</Button>
            </div>
        </div >
    )
}