import getABI from "../utils/getAbi.util"
import { getKakarottoCharacterAddress, getKakarottoTokenAddress, getKakarottoTreasureAddress } from "../utils/getAddress.util"

export const kakarottoCharacterConfig = (chainId: number | undefined) => {
    return {
        address: getKakarottoCharacterAddress(chainId),
        abi: getABI("KakarottoCharacter"),
    }
}

export const kakarottoTokenConfig = (chainId: number | undefined) => {
    return {
        address: getKakarottoTokenAddress(chainId),
        abi: getABI("KakarottoToken"),
    };
}

export const kakarottoTreasureConfig = (chainId: number | undefined) => {
    return {
        address: getKakarottoTreasureAddress(chainId),
        abi: getABI("KakarottoTreasure"),
    }
}