'use client';
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AssetList from './AssetList';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from '../ui/button';
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { capitalizeFirstLetter } from '../../contracts/utils/string.util';
import { Checkbox } from "@/components/ui/checkbox"
import { Categories } from '@/utils/enum.util';

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

const defaultItemAttributeState = {

};


export default function ProfileTab() {
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

    const getShowToolTip = (attribute: string) => {
        return (showToolTip as { [key: string]: boolean })[attribute];
    }

    const getRarityFilter = (rarity: any) => {
        return (filter.rarity as { [key: string]: boolean })[rarity];
    };

    const getAttributeFilter = (attribute: any) => {
        return (filter.attributes as { [key: string]: number })[attribute];
    }

    // Fake data
    const treasureFakeData: any[] = [
        {
            image: '/treasure.jpg',
            name: 'Treasure Name',
            tokenId: '1234',
            rarity: '0',
            category: Categories.Treasure,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: '/treasure.jpg',
            name: 'Treasure Name',
            tokenId: '1234',
            rarity: '2',
            category: Categories.Treasure,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: '/treasure.jpg',
            name: 'Treasure Name',
            tokenId: '1234',
            rarity: '3',
            category: Categories.Treasure,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: '/treasure.jpg',
            name: 'Treasure Name',
            tokenId: '1234',
            rarity: '4',
            category: Categories.Treasure,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        }, {
            image: '/treasure.jpg',
            name: 'Treasure Name',
            tokenId: '1234',
            rarity: '1',
            category: Categories.Treasure,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        }
    ];
    const characterFakeData: any[] = [
        {
            image: '/character.jpg',
            name: 'Character Name',
            tokenId: '1234',
            rarity: '0',
            category: Categories.Character,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
            account: '0x1234',
            creator: '0x1234'
        },
        {
            image: '/character.jpg',
            name: 'Character Name',
            tokenId: '1234',
            rarity: '1',
            category: Categories.Character,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
            account: '0x1234',
            creator: '0x1234'
        },
        {
            image: '/character.jpg',
            name: 'Character Name',
            tokenId: '1234',
            rarity: '2',
            category: Categories.Character,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
            account: '0x1234',
            creator: '0x1234'
        },
        {
            image: '/character.jpg',
            name: 'Character Name',
            tokenId: '1234',
            rarity: '3',
            category: Categories.Character,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
            account: '0x1234',
            creator: '0x1234'
        },
        {
            image: '/character.jpg',
            name: 'Character Name',
            tokenId: '1234',
            rarity: '4',
            category: Categories.Character,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
            account: '0x1234',
            creator: '0x1234'
        },
    ];
    const itemFakeData: any[] = [
        {
            image: "/equipment/weapon/EquipmentIconsBG71.png",
            name: 'Item Name',
            tokenId: '1234',
            rarity: '2',
            category: Categories.Item,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: "/equipment/weapon/EquipmentIconsBG71.png",
            name: 'Item Name',
            tokenId: '1234',
            rarity: '0',
            category: Categories.Item,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: "/equipment/weapon/EquipmentIconsBG71.png",
            name: 'Item Name',
            tokenId: '1234',
            rarity: '1',
            category: Categories.Item,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: "/equipment/weapon/EquipmentIconsBG71.png",
            name: 'Item Name',
            tokenId: '1234',
            rarity: '4',
            category: Categories.Item,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
        {
            image: "/equipment/weapon/EquipmentIconsBG71.png",
            name: 'Item Name',
            tokenId: '1234',
            rarity: '3',
            category: Categories.Item,
            attributes: [
                {
                    key: 'Attribute 1',
                    value: 'Value 1'
                },
                {
                    key: 'Attribute 2',
                    value: 'Value 2'
                }
            ],
        },
    ];
    const allFakeData: any[] = [...treasureFakeData, ...characterFakeData, ...itemFakeData];

    const raritiesTemplate = ["bronze", "silver", "gold", "platinum", "diamond"];
    const attributesTemplate = ["power", "defend", "agility", "intelligence", "luck"];

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
            <div className="flex flex-row justify-center gap-5 mt-5 w-full min-h-96 text-secondary">
                <div className="flex flex-col items-center justify-center w-1/4 h-fit gap-5">
                    <Accordion type="multiple" className='h-full w-full px-5 border-2 rounded-lg text-lg' >
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
                                        raritiesTemplate.map((rarity, index) => {
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
                                {attributesTemplate.map((attribute, index) => {
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
                <TabsContent value="all" className='w-3/4 flex items-center justify-center'>
                    {loading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={allFakeData} />}
                </TabsContent>
                <TabsContent value="character" className='w-3/4 flex items-center justify-center'>
                    {loading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={characterFakeData} />}
                </TabsContent>
                <TabsContent value="item" className='w-3/4 flex items-center justify-center'>
                    {loading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={itemFakeData} />}
                </TabsContent>
                <TabsContent value="treasure" className='w-3/4 flex items-center justify-center'>
                    {loading ? <div><CircularProgress isIndeterminate color='green.300' /></div> : <AssetList data={treasureFakeData} />}
                </TabsContent>
            </div>
        </Tabs >
    )
}
