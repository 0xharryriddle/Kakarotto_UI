import axios from "axios";

export default async function fetchMetadata({
  tokenURI,
  isTreasure,
  tokenId,
}: {
  tokenURI: string;
  isTreasure?: boolean | null;
  tokenId?: string;
}): Promise<any> {
  try {
    if (isTreasure && tokenId) {
      tokenURI = tokenURI.replace("{tokenId}", tokenId);
    }
    const metadataAPIData = await axios.get(tokenURI, {
      headers: {
        "Content-Type": "application/json",
      },
      //   params: {
      //     pinataGatewayToken: process.env.NEXT_PUBLIC_GATEWAY_TOKEN,
      //   },
    });
    return metadataAPIData.data;
  } catch (error) {
    console.error("Error in fetchMetadata NFT:", error);
    return undefined;
  }
}
