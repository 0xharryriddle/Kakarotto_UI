import { CONTRACT_ACTIONS } from "./commons.util";

const getContractAction = (contractName: any, action: any) => {
    return contractName[action]
}

export const getCharacterAction = (action: any) => {
    return getContractAction(CONTRACT_ACTIONS.KakarottoCharacter, action);
}

export const getTreasureAction = (action: any) => {
    return getContractAction(CONTRACT_ACTIONS.KakarottoTreasure, action);
}

export const getItemAction = (action: any) => {
    return getContractAction(CONTRACT_ACTIONS.KakarottoItem, action);
}