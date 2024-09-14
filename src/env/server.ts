import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_KEY: z.string().min(32).max(32),
    ROOT_URI: z.string().url().default("http://localhost:3000/graphql"),
    PROJECT_ID_WALLET_CONNECT: z.string(),
    SEPOLIA_URL: z.string(),
    IPFS_URL: z.string(),
    GATEWAY_TOKEN: z.string(),
    CHARACTER_FOLDER_CID: z.string(),
    TREASURE_FOLDER_CID: z.string(),
    ITEMS_FOLDER_CID: z.string(),
    DEVELOPMENT_API_URL: z.string(),
    PRODUCTION_API_URL: z.string(),
    ENVIRONMENT: z.string(),
    SUBGRAPH_URL: z.string(),
  },
  runtimeEnv: {
    API_KEY: process.env.API_KEY,
    ROOT_URI: process.env.ROOT_URI,
    PROJECT_ID_WALLET_CONNECT:
      process.env.NEXT_PUBLIC_PROJECT_ID_WALLET_CONNECT,
    SEPOLIA_URL: process.env.NEXT_PUBLIC_SEPOLIA_URL,
    IPFS_URL: process.env.NEXT_PUBLIC_IPFS_URL,
    GATEWAY_TOKEN: process.env.NEXT_PUBLIC_GATEWAY_TOKEN,
    CHARACTER_FOLDER_CID: process.env.NEXT_PUBLIC_CHARACTER_FOLDER_CID,
    TREASURE_FOLDER_CID: process.env.NEXT_PUBLIC_TREASURE_FOLDER_CID,
    ITEMS_FOLDER_CID: process.env.NEXT_PUBLIC_ITEMS_FOLDER_CID,
    DEVELOPMENT_API_URL: process.env.NEXT_PUBLIC_DEVELOPMENT_API_URL,
    PRODUCTION_API_URL: process.env.NEXT_PUBLIC_PRODUCTION_API_URL,
    ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
    SUBGRAPH_URL: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
  },
});
