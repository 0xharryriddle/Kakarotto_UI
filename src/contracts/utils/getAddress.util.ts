import { SMART_CONTRACT_ADDRESS } from "./commons.util";

const getContractAddress = (contractName: any, networkId: any) => {
    return contractName[networkId];
};

export const getKakarottoTokenAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoToken, networkId);
};

export const getKakarottoERC6551AccountAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoERC6551Account, networkId);
};

export const getKakarottoERC6551RegistryAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoERC6551Registry, networkId);
};

export const getKakarottoVaultAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoVault, networkId);
};

export const getKakarottoItemAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoItem, networkId);
};

export const getKakarottoTreasureAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoTreasure, networkId);
};

export const getKakarottoCharacterAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoCharacter, networkId);
};

export const getKakarottoMarketplaceAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.KakarottoMarketplace, networkId);
};

export const getERC721BidAddress = (networkId: any) => {
    return getContractAddress(SMART_CONTRACT_ADDRESS.ERC721Bid, networkId);
};


