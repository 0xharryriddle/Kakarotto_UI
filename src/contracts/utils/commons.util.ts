import { keccak256, stringToHex, toHex } from "viem";
import erc721BidABI from "../abi/ERC721Bid.abi";
import characterABI from "../abi/KakarottoCharacter.abi";
import erc6551AccountABI from "../abi/KakarottoERC6551Account.abi";
import erc6551RegistryABI from "../abi/KakarottoERC6551Registry.abi";
import itemABI from "../abi/KakarottoItem.abi";
import marketplaceABI from "../abi/KakarottoMarketplace.abi";
import tokenABI from "../abi/KakarottoToken.abi";
import treasureABI from "../abi/KakarottoTreasure.abi";
import vaultABI from "../abi/KakarottoVault.abi";

export const SMART_CONTRACT_ADDRESS = {
  KakarottoToken: {
    1802203764: "0x98a6d9963e9fe07df19cef754669bd422b0d9d49",
    11155111: "0xf81388e8f3fbee04ae95e597f51ffb31aabd92b4",
  },
  KakarottoERC6551Account: {
    1802203764: "0xf2d4c5b67966c3dcf6f52e244ead0e1c504819d9",
    11155111: "0x76cc168987ff4fc3382b3ac8a76864ecb0800b85",
  },
  KakarottoERC6551Registry: {
    1802203764: "0x10fa405976028d804ea39bb4d4768eff101317cf",
    11155111: "0xbd1344242940d08bc23e71adcab5e7c6e9fb300c",
  },
  KakarottoVault: {
    1802203764: "0x4a40af76ba39e5a03aff6b4147de3e5efcaae941",
    11155111: "0xb054a3fa055c5a4df4255c15d18a28008f88d9ba",
  },
  KakarottoItem: {
    1802203764: "0x7dd77c6ad512f240bcdbeb1d502b4a051b25c65c",
    11155111: "0x5d3b399b58aa37bae80dbf7303e46c10e80529a7",
  },
  KakarottoTreasure: {
    1802203764: "0xbb859422541a58b31a15660b5e536ce156b9fc92",
    11155111: "0xCF2CFF39E29Da4C0210b16be7e3E717d04ED9A7E",
  },
  KakarottoCharacter: {
    1802203764: "0xe2553f82a513ede6ec889b53a90a2ce9152c51a9",
    11155111: "0xed4f50ad8898853095203d49b63878d81bfee4d5",
  },
  KakarottoMarketplace: {
    1802203764: "0xc43b9fc4f10c43b8211e7d78275a9a4856447228",
    11155111: "0xb22383Db550cddD81AF5BC14323ed87EBd86a6F6",
  },
  ERC721Bid: {
    1802203764: "0x91b41d09c6045c6b93c1477f7a05306f2572a8d8",
    11155111: "0x3713b9a513d62a10686c5af6cb8e4b7c8c36bd5b",
  },
};

export const ABI_CONTRACT = {
  "KakarottoToken": tokenABI,
  "KakarottoERC6551Account": erc6551AccountABI,
  "KakarottoERC6551Registry": erc6551RegistryABI,
  "KakarottoVault": vaultABI,
  "KakarottoItem": itemABI,
  "KakarottoTreasure": treasureABI,
  "KakarottoCharacter": characterABI,
  "KakarottoMarketplace": marketplaceABI,
  "ERC721Bid": erc721BidABI,
};

export const EXPLORER_URL = {
  1802203764: "https://sepolia.kakarotscan.org",
  11155111: "https://sepolia.etherscan.io",
};

export const CONTRACT_ACTIONS = {
  KakarottoCharacter: {
    MINT_ACTION: keccak256(toHex("KAKAROTTO_MINT")),
    LEVELUP_ACTION: keccak256(toHex("KAKAROTTO_LEVELUP"))
  },
  KakarottoItem: {
    MINT_ACTION: keccak256(toHex("KAKAROTTO_ITEM_MINT")),
  },
  KakarottoTreasure: {
    MINT_ACTION: stringToHex("KAKAROTTO_MINT_TREASURE", { size: 32 }),
    OPEN_ACTION: stringToHex("KAKAROTTO_OPEN_TREASURE", { size: 32 })
  }
}