export const metadataURL = ({url, hash}: {url: string, hash: string}) => {
    return `${url}/${hash}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`;
}
