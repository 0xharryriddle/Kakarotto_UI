import { SMART_CONTRACT_ADDRESS } from "./commons.util";

const getContractAddress = (contractName: any, networkId: any): `0x${string}` => {
    return contractName[networkId];
};

export const getKakarottoTokenAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoToken, networkId);
};

export const getKakarottoERC6551AccountAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoERC6551Account, networkId);
};

export const getKakarottoERC6551RegistryAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoERC6551Registry, networkId);
};

export const getKakarottoVaultAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoVault, networkId);
};

export const getKakarottoItemAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoItem, networkId);
};

export const getKakarottoTreasureAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoTreasure, networkId);
};

export const getKakarottoCharacterAddress = (networkId: any): `0x${string}` => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoCharacter, networkId);
};

export const getKakarottoMarketplaceAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoMarketplace, networkId);
};

export const getERC721BidAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.ERC721Bid, networkId);
};


