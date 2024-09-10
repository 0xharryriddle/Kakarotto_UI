import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  Chain
} from '@rainbow-me/rainbowkit';
import {
  sepolia
} from 'wagmi/chains';
import { createConfig, http } from 'wagmi';
import { injected } from 'wagmi/connectors';

const kakarotZkEVM = {
  id: 1802203764,
  name: 'Kakarot Sepolia',
  iconUrl: '/kakarotZkEVMLogo.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://sepolia-rpc.kakarot.org'] },
  },
  blockExplorers: {
    default: { name: 'KakarotSepolia', url: 'https://sepolia.kakarotscan.org/' },
  },
} as const satisfies Chain;


const PROJECT_ID_WALLET_CONNECT = process.env.NEXT_PUBLIC_PROJECT_ID_WALLET_CONNECT || "";

export const wagmiConfig = getDefaultConfig({
  appName: "Kakarotto Marketplace",
  projectId: PROJECT_ID_WALLET_CONNECT,
  chains: [sepolia, kakarotZkEVM],
  ssr: true, 
});

export const customConfig = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_URL),
    // [kakarotZkEVM.id]: http(kakarotZkEVM.rpcUrls.default.http[0]),
  }
})