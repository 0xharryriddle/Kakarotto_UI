'use client';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query'
import { gql, request } from 'graphql-request'
import { getAddress, isAddressEqual } from 'viem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AssetList from './AssetList';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
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
import { Account, Character, NFT, Treasure, TreasureAccount, Item } from '@/interface/graphql.interface';
import { useAccount } from 'wagmi';
import { fetchCharacterData, fetchItemData, fetchTreasureData } from '@/contracts/utils/fetchCardData.utill';

const defaultRarityState = {
    bronze: false,
    silver: false,
    gold: false,
    platinum: false,
    diamond: false
};

const defaultCharacterAttributeState = {
    power: 0,
    defend: 0,
    agility: 0,
    intelligence: 0,
    luck: 0
};

const subgraph_url: string = process.env.NEXT_PUBLIC_SUBGRAPH_URL || ""


interface GraphQLData {
    characters: Character[],
    treasureAccounts: TreasureAccount[],
    items: Item[]
}

interface ProfileTabProps {
}


export default function ProfileTab({ }: ProfileTabProps) {
    const { address, chainId, isConnected } = useAccount();
    const [loading, setLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState('all');
    const [filter, setFilter] = useState({
        rarity: {
            bronze: false,
            silver: false,
            gold: false,
            platinum: false,
            diamond: false
        },
        attributes: {
            power: 0,
            defend: 0,
            agility: 0,
            intelligence: 0,
            luck: 0
        }
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

    const query = gql` {
        characters (where: {nft_: {searchOwner: "${address ? getAddress(address as string).toLocaleLowerCase().toLocaleLowerCase() : "0x"}"}}){
          characterAccount {
            id
            contractAddress
          }
          nft {
            id
            creator
            owner {
              address
            }
            tokenId
            tokenURI
            contractAddress
            category
            amount
            rarity
            orders {
              id
              category
              tokenId
              transactionHash
              owner
              buyer
              price
              status
              createdAt
              expiresAt
              updatedAt
            }
            bids {
              id
              category
              tokenId
              bidder
              seller
              price
              status
              expiresAt
              createdAt
              updatedAt
            }
            activeOrder {
              id
              category
              tokenId
              transactionHash
              owner
              buyer
              price
              status
              createdAt
              expiresAt
              updatedAt
            }
            searchOwner
          }
          attributes {
            attribute
            value
          }
          level
          exp
        }
        treasureAccounts (where: {account: "${address ? getAddress(address as string).toLocaleLowerCase().toLocaleLowerCase() : "0x"}"}){
          treasure {
            tokenId
            tokenURI
            nft {
              id
              tokenId
              tokenURI
              contractAddress
              category
              amount
              rarity
              orders {
                id
                category
                tokenId
                transactionHash
                owner
                buyer
                price
                status
                createdAt
                expiresAt
                updatedAt
              }
              bids {
                id
                category
                tokenId
                bidder
                seller
                price
                status
                expiresAt
                createdAt
                updatedAt
              }
              activeOrder {
                id
                category
                tokenId
                transactionHash
                owner
                buyer
                price
                status
                createdAt
                expiresAt
                updatedAt
              }
            }
          }
            balance
        }
        items (where: {nft_: {searchOwner: "${address ? getAddress(address as string).toLocaleLowerCase().toLocaleLowerCase() : "0x"}"}}){
          nft {
            id
            creator
            owner {
              address
            }
            tokenId
            tokenURI
            contractAddress
            category
            amount
            rarity
            orders {
              id
              category
              tokenId
              transactionHash
              owner
              buyer
              price
              status
              createdAt
              expiresAt
              updatedAt
            }
            bids {
              id
              category
              tokenId
              bidder
              seller
              price
              status
              expiresAt
              createdAt
              updatedAt
            }
            activeOrder {
              id
              category
              tokenId
              transactionHash
              owner
              buyer
              price
              status
              createdAt
              expiresAt
              updatedAt
            }
          }
          attributes {
            attribute
            value
            isIncrease
            isPercentage
          } 
        }
      }`

    const [nftData, setNftData] = useState<{
        all: any[],
        treasure: any[],
        character: any[],
        item: any[]
    }>({
        all: [],
        treasure: [],
        character: [],
        item: []
    });

    const { data: graphqlData, isLoading: graphqlIsLoading, error } = useQuery<GraphQLData>({
        queryKey: ['data', address],
        async queryFn() {
            if (address) {
                return await request(subgraph_url, query);
            }
            return {
                characters: [],
                treasureAccounts: [],
                items: []
            };
        },
        enabled: !!address
    });

    useEffect(() => {
        if (graphqlData && address) {
            setNftData({
                all: [],
                treasure: [],
                character: [],
                item: []
            });
            const { characters,
                treasureAccounts,
                items } = graphqlData;
            fetchNFTData({ characters, treasureAccounts, items });
            setLoading(false);
        }
    }, [graphqlData, address]);

    const fetchNFTData = async (
        {
            treasureAccounts,
            characters,
            items
        }: {
            treasureAccounts: TreasureAccount[],
            characters: Character[],
            items: Item[]
        }) => {
        try {
            const treasureResult = await fetchTreasureData(treasureAccounts);
            const characterResult = await fetchCharacterData(characters);
            const itemResult = await fetchItemData(items);
            setNftData({
                character: characterResult,
                item: itemResult,
                treasure: treasureResult,
                all: [].concat(...characterResult).concat(...itemResult).concat(...treasureResult),
            });
        } catch (error) {
            console.error("Failed to fetch metadata:", error);
        }
    }

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
                                                rarity: defaultRarityState
                                            }
                                        )} className='cursor-pointer' checked={JSON.stringify(filter.rarity) == JSON.stringify(defaultRarityState)} />
                                        <Label htmlFor="none">None</Label>
                                    </div>
                                    {
                                        mappings.rarities.map((rarity, index) => {
                                            return <div className="flex items-center space-x-2 px-5" key={index}>
                                                <Checkbox onClick={() => setFilter(
                                                    {
                                                        ...filter,
                                                        rarity: {
                                                            ...defaultRarityState,
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
                    <Button className='w-40' onClick={handleApplyFilter} disabled={JSON.stringify(filter) == JSON.stringify({ rarity: defaultRarityState, attributes: defaultCharacterAttributeState })}>Apply</Button>
                </div>
                <TabsContent value="all" className='w-3/4 h-full'>
                    {loading || graphqlIsLoading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={nftData.all} />}
                </TabsContent>
                <TabsContent value="character" className='w-3/4 flex text-center justify-center'>
                    {loading || graphqlIsLoading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={
                        // characterFakeData
                        nftData.character
                    } />}
                </TabsContent>
                <TabsContent value="item" className='w-3/4'>
                    {loading || graphqlIsLoading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={
                        // itemFakeData
                        nftData.item
                    } />}
                </TabsContent>
                <TabsContent value="treasure" className='w-3/4'>
                    {loading || graphqlIsLoading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={
                        // treasureFakeData
                        nftData.treasure
                    } />}
                </TabsContent>
            </div>
        </Tabs >
    )
}
