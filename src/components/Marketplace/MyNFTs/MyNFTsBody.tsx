'use client';
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import { Label } from "@/components/ui/label"
import { capitalizeFirstLetter } from '@/contracts/utils/string.util';
import { Checkbox } from "@/components/ui/checkbox"
import * as mappings from '@/utils/mapping.util';
import { Character, TreasureAccount, Item, Nft } from '@/generated/graphql';
import { useAccount } from 'wagmi';
import MyNFTsList from './MyNFTsList';
import LoadingTemplate from '@/components/LoadingTemplate';
import { DEFAULT_CHARACTER_ATTRIBUTE_STATE, DEFAULT_RARITY_STATE } from '@/utils/constant.util';

interface MyNFTsBodyProps {
    data?: Nft[],
    dataIsFetched?: boolean,
    loadingData?: boolean
}

export default function MyNFTsBody({ data, dataIsFetched, loadingData }: MyNFTsBodyProps) {
    const { address, chainId, isConnected } = useAccount();
    const [loading, setLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState('all');
    const [filter, setFilter] = useState({
        rarity: DEFAULT_RARITY_STATE,
        attributes: DEFAULT_CHARACTER_ATTRIBUTE_STATE,
    });
    const [showToolTip, setShowToolTip] = useState(
        {
            power: false,
            defend: false,
            agility: false,
            intelligence: false,
            luck: false
        }
    )
    const [searchInput, setSearchInput] = useState('');

    const getShowToolTip = (attribute: string) => {
        return (showToolTip as { [key: string]: boolean })[attribute];
    }

    const getRarityFilter = (rarity: any) => {
        return (filter.rarity as { [key: string]: boolean })[rarity];
    };

    const getAttributeFilter = (attribute: any) => {
        return (filter.attributes as { [key: string]: number })[attribute];
    }

    const resetState = () => {
        // setFilter({
        //     rarity: 'none',
        //     attributes: 'none'
        // });
        setSearchInput('');
    }

    const handleApplyFilter = () => {
        if (JSON.stringify(filter) === JSON.stringify({ rarity: 'none', attributes: 'none' })) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log(filter);
        }, 1000);
    }

    return (
        <Tabs defaultValue="all" className="w-full" onValueChange={() => {
            resetState();
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }}>
            <TabsList className='bg-transparent text-primary' >
                <TabsTrigger value="all">All owned NFTs</TabsTrigger>
                <TabsTrigger value="character">Character</TabsTrigger>
                <TabsTrigger value="item">Item</TabsTrigger>
                <TabsTrigger value="treasure">Treasure</TabsTrigger>
            </TabsList>
            <div className="flex flex-row items-center gap-2 mt-5">
                <Button disabled={true} className='cursor-default text-lg font-bold bg-transparent text-primary'>Filter</Button>
                <Input
                    placeholder='Search by Token Id'
                    className='text-md'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>
            <div className="flex flex-row gap-5 mt-5 w-full min-h-96 text-secondary h-full">
                <div className="flex flex-col items-center justify-center w-1/4 h-fit gap-5">
                    <Accordion type="multiple" className='h-full w-full px-5 border-2 rounded-lg text-2xl text-primary bg-secondary font-bold' >
                        <AccordionItem value="rarity">
                            <AccordionTrigger className='font-bold text-lg'>Rarity</AccordionTrigger>
                            <AccordionContent >
                                <div className='flex flex-col justify-center gap-5 w-full'>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox onClick={() => setFilter(
                                            {
                                                ...filter,
                                                rarity: DEFAULT_RARITY_STATE,
                                            }
                                        )} className='cursor-pointer' checked={JSON.stringify(filter.rarity) == JSON.stringify(DEFAULT_RARITY_STATE)} />
                                        <Label htmlFor="none">None</Label>
                                    </div>
                                    {
                                        mappings.rarities.map((rarity, index) => {
                                            return <div className="flex items-center space-x-2 px-5" key={index}>
                                                <Checkbox onClick={() => setFilter(
                                                    {
                                                        ...filter,
                                                        rarity: {
                                                            ...DEFAULT_RARITY_STATE,
                                                            [rarity]: true
                                                        }
                                                    }
                                                )} className='cursor-pointer' checked={getRarityFilter(rarity)} />
                                                <Label htmlFor={rarity}>{capitalizeFirstLetter(rarity)}</Label>
                                            </div>
                                        })
                                    }
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="attributes" className='font-bold text-lg'>
                            <AccordionTrigger className='font-bold text-lg'>Attributes</AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-5' >
                                <div className="flex items-center space-x-2">
                                    <Checkbox className='cursor-pointer' />
                                    <Label htmlFor="none">None</Label>
                                </div>
                                {mappings.attributes.map((attribute, index) => {
                                    return (<div className="flex flex-col justify-center gap-5 px-5" key={index}>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox className='cursor-pointer' />
                                            <Label htmlFor={attribute}>{capitalizeFirstLetter(attribute)}</Label>
                                        </div>
                                        <Slider
                                            id='slider'
                                            defaultValue={0}
                                            min={0}
                                            max={100}
                                            colorScheme='teal'
                                            onChange={(value) => setFilter(
                                                {
                                                    ...filter,
                                                    attributes: {
                                                        ...filter.attributes,
                                                        [attribute]: value
                                                    }
                                                }
                                            )}
                                            onMouseEnter={() => setShowToolTip(
                                                {
                                                    ...showToolTip,
                                                    [attribute]: true
                                                }
                                            )}
                                            onMouseLeave={() => setShowToolTip(
                                                {
                                                    ...showToolTip,
                                                    [attribute]: false
                                                }
                                            )}
                                            className='mb-5'
                                        >
                                            <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                                                25
                                            </SliderMark>
                                            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                                                50
                                            </SliderMark>
                                            <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                                                75
                                            </SliderMark>
                                            <SliderTrack>
                                                <SliderFilledTrack />
                                            </SliderTrack>
                                            <Tooltip
                                                hasArrow
                                                bg='teal.500'
                                                color='white'
                                                placement='top'
                                                isOpen={getShowToolTip(attribute)}
                                                label={`${getAttributeFilter(attribute)}%`}
                                            >
                                                <SliderThumb />
                                            </Tooltip>
                                        </Slider>
                                    </div>);
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Button
                        className='w-40'
                        onClick={handleApplyFilter}
                        disabled={
                            JSON.stringify(filter)
                            ==
                            JSON.stringify(
                                { rarity: DEFAULT_RARITY_STATE, attributes: DEFAULT_CHARACTER_ATTRIBUTE_STATE }
                            )
                        }
                    >Apply</Button>
                </div>
                <TabsContent value="all" className='w-3/4 flex text-center justify-center'>
                    {loading || loadingData
                        ? <LoadingTemplate />
                        : <MyNFTsList
                            data={data}
                            isFetched={dataIsFetched}
                        />}
                </TabsContent>
                {/* <TabsContent value="character" className='w-3/4 flex text-center justify-center'>
                    {loading || loadingData ? <LoadingTemplate /> : <MyNFTsList data={
                        nftData.characters
                    } />}
                </TabsContent>
                <TabsContent value="item" className='w-3/4 flex text-center justify-center'>
                    {loading || loadingData ? <LoadingTemplate /> : <MyNFTsList data={
                        nftData.items
                    } />}
                </TabsContent>
                <TabsContent value="treasure" className='w-3/4 flex text-center justify-center'>
                    {loading || loadingData ? <LoadingTemplate /> : <MyNFTsList data={
                        nftData.treasures
                    } />}
                </TabsContent> */}
            </div>
        </Tabs >
    )
}
