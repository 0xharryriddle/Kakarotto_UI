import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";
import { Address } from "viem";
import {
  Account_OrderBy,
  InputMaybe,
  OrderDirection,
  Scalars,
} from "@/generated/graphql";

export const GET_ACCOUNT_BY_ADDRESS = ({
  address,
}: {
  address: Address;
}): RequestDocument => {
  return graphql(`
    query GetAccountByAddress {
      account(where: { address: { _eq: ${address} } }) {
        id
        address
        nfts(orderBy: tokenId) {
          id
          tokenId
          contractAddress
          category
          creator
          owner {
            id
            address
          }
          amount
          tokenURI
          rarity
          orders(orderBy: createdAt) {
            id
            marketplaceAddress
            category
            nftAddress
            tokenId
            amount
            transactionHash
            owner
            buyer
            price
            status
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
          bids(orderBy: createdAt) {
            id
            bidAddress
            category
            nftAddress
            tokenId
            bidder
            seller
            price
            status
            blockchainId
            blockNumber
            expiresAt
            createdAt
            updatedAt
          }
        }
        treasureAccounts {
          id
          treasure {
            id
            tokenId
            tokenURI
            nft {
              id
              tokenId
              contractAddress
              category
              creator
              owner {
                id
                address
              }
              amount
              tokenURI
              rarity
              orders(orderBy: createdAt) {
                id
                marketplaceAddress
                category
                nftAddress
                tokenId
                amount
                transactionHash
                owner
                buyer
                price
                status
                blockNumber
                expiresAt
                createdAt
                updatedAt
              }
              bids(orderBy: createdAt) {
                id
                bidAddress
                category
                nftAddress
                tokenId
                bidder
                seller
                price
                status
                blockchainId
                blockNumber
                expiresAt
                createdAt
                updatedAt
              }
            }
            name
            owner {
              id
              address
            }
          }
          balance
        }
        sales
        purchases
        spent
        earned
      }
    }
  `) as RequestDocument;
};

// export const GET_ALL_ACCOUNTS = ({
//   first,
//   skip,
//   orderBy,
//   orderDirection,
// }: {
//   first?: InputMaybe<Scalars["Int"]["input"]>;
//   skip?: InputMaybe<Scalars["Int"]["input"]>;
//   orderBy?: Account_OrderBy;
//   orderDirection?: OrderDirection;
// }): RequestDocument => {
//   return graphql(`
//     query GetAllAccounts {
//       accounts {
//         id
//         address
//         nfts(orderBy: tokenId) {
//           id
//           tokenId
//           contractAddress
//           category
//           creator
//           owner {
//             id
//             address
//           }
//           amount
//           tokenURI
//           rarity
//           orders(orderBy: createdAt) {
//             id
//             marketplaceAddress
//             category
//             nftAddress
//             tokenId
//             amount
//             transactionHash
//             owner
//             buyer
//             price
//             status
//             blockNumber
//             expiresAt
//             createdAt
//             updatedAt
//           }
//           bids(orderBy: createdAt) {
//             id
//             bidAddress
//             category
//             nftAddress
//             tokenId
//             bidder
//             seller
//             price
//             status
//             blockchainId
//             blockNumber
//             expiresAt
//             createdAt
//             updatedAt
//           }
//         }
//         treasureAccounts {
//           id
//           treasure {
//             id
//             tokenId
//             tokenURI
//             nft {
//               id
//               tokenId
//               contractAddress
//               category
//               creator
//               owner {
//                 id
//                 address
//               }
//               amount
//               tokenURI
//               rarity
//               orders(orderBy: createdAt) {
//                 id
//                 marketplaceAddress
//                 category
//                 nftAddress
//                 tokenId
//                 amount
//                 transactionHash
//                 owner
//                 buyer
//                 price
//                 status
//                 blockNumber
//                 expiresAt
//                 createdAt
//                 updatedAt
//               }
//               bids(orderBy: createdAt) {
//                 id
//                 bidAddress
//                 category
//                 nftAddress
//                 tokenId
//                 bidder
//                 seller
//                 price
//                 status
//                 blockchainId
//                 blockNumber
//                 expiresAt
//                 createdAt
//                 updatedAt
//               }
//             }
//             name
//             owner {
//               id
//               address
//             }
//           }
//           balance
//         }
//         sales
//         purchases
//         spent
//         earned
//       }
//     }
//   `) as RequestDocument;
// };
