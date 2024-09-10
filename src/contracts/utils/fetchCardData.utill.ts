import axios from 'axios';
import { Account, Character, NFT, Treasure, TreasureAccount, Item } from '@/interface/graphql.interface';
import { metadata } from '../../../.history/src/app/layout_20240730161554';

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

export type fetchCharacterDataReturnType = {
    id: string,
    metadata: any,
    tokenId: string,
    rarity: string,
    category: string,
    attributes: any[],
    level: string,
    exp: string,
}

export const fetchTreasureData = async (treasureAccounts: TreasureAccount[])=> {
    const length = treasureAccounts.length;
    if (length == 0) return [];
    const result: any[] = await Promise.all(
        treasureAccounts.map(async (treasureAccount: TreasureAccount) => {
            const { treasure, balance } = treasureAccount;
            const { tokenId, tokenURI, nft } = treasure as Treasure;
            const { id, rarity, category } = nft as NFT;

            let metadata = "";

            if (tokenURI && tokenId) {
                try {
                    const apiURL = tokenURI.replace('{tokenId}', tokenId);
                    const metadataResponse = await axios.get(apiURL);
                    metadata = metadataResponse.status == 200 ? metadataResponse.data : {};
                } catch (error) {
                    console.error("Failed to fetch metadata:", error);
                }
            }

            return {
                id,
                tokenId,
                rarity,
                category,
                balance: balance ? balance : "0",
                metadata
            }
        }));
    return result;
};

export const fetchCharacterData = async (characters: Character[]) => {
    const length = characters.length;
    if (length == 0) return [];
    const result: any[] = await Promise.all(
    characters.map(async (character: Character) => {
            const { nft, attributes, level, exp } = character;
            const { id, tokenId, tokenURI, rarity, category } = nft as NFT;

            let metadata = "";

            if (tokenURI && tokenId) {
                try {
                    const apiURL = tokenURI.replace('{tokenId}', tokenId);
                    const metadataResponse = await axios.get(apiURL);
                    metadata = metadataResponse.status == 200 ? metadataResponse.data : {};
                } catch (error) {
                    console.error("Failed to fetch metadata:", error);
                }
            }

        return {
            id,
            metadata, 
            tokenId, 
            rarity, 
            category,
            attributes,
            level: level ? level : "0",
            exp: exp ? exp : "0"
        }
    }));
    return result;
};

export const fetchItemData = async (items: Item[]) => {
    const length = items.length;
    if (length == 0) return[];
    const result: any[] = await Promise.all(
        items.map(async (item: Item) => {
            const { nft, attributes } = item;
            const { id, tokenId, tokenURI, rarity, category } = nft as NFT;

            let metadata = "";

            if (tokenURI && tokenId) {
                try {
                    const apiURL = tokenURI.replace('{tokenId}', tokenId);
                    const metadataResponse = await axios.get(apiURL);
                    metadata = metadataResponse.status == 200 ? metadataResponse.data : {};
                } catch (error) {
                    console.error("Failed to fetch metadata:", error);
                }
            }

            return {
                id,
                metadata, 
                tokenId, 
                rarity, 
                category,   
                attributes,
            }
        }));
    return result;
};