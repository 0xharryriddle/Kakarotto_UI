export const mappingRarity = (rarity: number) => {
    switch (rarity) {
        case 0:
            return "Bronze";
        case 1:
            return "Silver";
        case 2:
            return "Gold";
        case 3:
            return "Platinum";
        case 4:
            return "Diamond";
        default:
            return "Bronze";
    }
}