export interface Count {
    id?: string;
    orderTotal?: string;
    orderCharacterTotal?: string;
    orderTreasureTotal?: string;
    orderItemTotal?: string;
    characterTotal?: string;
    treasureTotal?: string;
    itemTotal?: string;
    started?: string;
    salesTotal?: string;
    creatorEarningTotal?: string;
    daoEarningTotal?: string;
  }
  
  export interface Account {
    id?: string;
    address?: string;
    nfts?: NFT[];
    treasureAccounts?: TreasureAccount[];
    sales?: string;
    purchases?: string;
    spent?: string;
    earned?: string;
  }
  
  export interface NFT {
    id?: string;
    tokenId?: string;
    contractAddress?: string;
    category?: string;
    creator?: string;
    owner?: Account;
    amount?: string;
    tokenURI?: string;
    rarity?: string;
    orders?: Order[];
    bids?: Bid[];
    activeOrder?: Order;
    name?: string;
    createdAt?: string;
    updatedAt?: string;
    soldAt?: string;
    transferredAt?: string;
    character?: Character;
    item?: Item;
    treasure?: Treasure;
    sales?: string;
    volume?: string;
    searchOrderStatus?: string;
    searchOrderPrice?: string;
    searchOrderExpiresAt?: string;
    searchOrderCreatedAt?: string;
    searchIsCharacter?: boolean;
    searchCharacterAccount?: string;
    searchCharacterLevel?: string;
    searchCharacterExp?: string;
    searchCharacterAttribute?: CharacterAttribute[];
    searchIsTreasure?: boolean;
    searchIsItem?: boolean;
    searchItemAttribute?: ItemAttribute[];
  }
  
  export interface Character {
    id?: string;
    characterAccount?: CharacterAccount;
    level?: string;
    exp?: string;
    nft?: NFT;
    attributes?: CharacterAttribute[];
  }
  
  export interface CharacterAttribute {
    id?: string;
    attribute?: string;
    character?: Character;
    value?: string;
  }
  
  export interface CharacterAccount {
    id?: string;
    character?: Character;
    contractAddress?: string;
  }
  
  export interface Treasure {
    id?: string;
    tokenId?: string;
    tokenURI?: string;
    nft?: NFT;
    name?: string;
    owner?: Account[];
  }
  
  export interface TreasureAccount {
    id?: string;
    account?: Account;
    treasure?: Treasure;
    balance?: string;
  }
  
  export interface Item {
    id?: string;
    nft?: NFT;
    attributes?: ItemAttribute[];
  }
  
  export interface ItemAttribute {
    id?: string;
    item?: Item;
    attribute?: string;
    value?: string;
    isIncrease?: boolean;
    isPercentage?: boolean;
  }
  
  export interface Order {
    id?: string;
    marketplaceAddress?: string;
    category?: string;
    nft?: NFT;
    nftAddress?: string;
    tokenId?: string;
    amount?: string;
    transactionHash?: string;
    owner?: string;
    buyer?: string;
    price?: string;
    status?: string;
    blockNumber?: string;
    expiresAt?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface Bid {
    id?: string;
    bidAddress?: string;
    category?: string;
    nft?: NFT;
    nftAddress?: string;
    tokenId?: string;
    bidder?: string;
    seller?: string;
    price?: string;
    status?: string;
    blockchainId?: string;
    blockNumber?: string;
    expiresAt?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface Sale {
    id?: string;
    type?: string;
    buyer?: string;
    seller?: string;
    price?: string;
    nft?: NFT;
    amount?: string;
    timestamp?: string;
    transactionHash?: string;
    searchTokenId?: string;
    searchContractAddress?: string;
    searchCategory?: string;
  }
  
  interface AnalyticsDayData {
    id?: string;
    date?: string;
    sales?: string;
    volume?: string;
    creatorsEarning?: string;
    daoEarning?: string;
  }
  
  type Rarity = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
  
  type Category = 'character' | 'treasure' | 'item';
  
  type Attribute = 'power' | 'defend' | 'agility' | 'intelligence' | 'luck';
  
  type OrderStatus = 'open' | 'sold' | 'cancelled';
  
  type SaleType = 'bid' | 'order';

