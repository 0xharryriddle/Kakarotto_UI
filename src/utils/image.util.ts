// import { env } from "@/env/server";
const pinataBaseURL = process.env.NEXT_PUBLIC_IPFS_URL;

export const imageURL = ({ url, hash }: { url: string; hash: string }) => {
  return `${url}/${hash}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`;
};

export const accessToPinataImage = (pinataURL?: string) => {
  if (!pinataURL) {
    return "/secret_treasure.gif";
  }
  return `${pinataURL}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`;
};
