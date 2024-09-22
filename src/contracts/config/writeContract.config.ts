import { Abi, Address } from "viem"
import getABI from "../utils/getAbi.util"
import { getERC721BidAddress, getKakarottoCharacterAddress, getKakarottoMarketplaceAddress, getKakarottoTokenAddress, getKakarottoTreasureAddress } from "../utils/getAddress.util"

export const kakarottoCharacterConfig = (chainId: number | undefined): {address: Address, abi: Abi | readonly unknown[]} => {
    return {
        address: getKakarottoCharacterAddress(chainId),
        abi: getABI("KakarottoCharacter"),
    }
}

export const kakarottoTokenConfig = (chainId: number | undefined): {address: Address, abi: Abi | readonly unknown[]} => {
    return {
        address: getKakarottoTokenAddress(chainId),
        abi: getABI("KakarottoToken"),
    };
}

export const kakarottoTreasureConfig = (chainId: number | undefined): {address: Address, abi: Abi | readonly unknown[]} => {
    return {
        address: getKakarottoTreasureAddress(chainId),
        abi: getABI("KakarottoTreasure"),
    }
}

export const kakarottoMarketplaceConfig = (chainId: number | undefined): {address: Address, abi: Abi | readonly unknown[]} => {
    return {
        address: getKakarottoMarketplaceAddress(chainId),
        abi: getABI("KakarottoMarketplace"),
    }
}

export const erc721BidConfig = (chainId: number | undefined): {address: Address, abi: Abi | readonly unknown[]} => {
    return {
        address: getERC721BidAddress(chainId),
        abi: getABI("ERC721Bid"),
    }
}