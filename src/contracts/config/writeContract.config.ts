import { Abi, Address } from "viem"
import getABI from "../utils/getAbi.util"
import { getKakarottoCharacterAddress, getKakarottoTokenAddress, getKakarottoTreasureAddress } from "../utils/getAddress.util"

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