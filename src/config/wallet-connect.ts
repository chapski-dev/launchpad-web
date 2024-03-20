import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
  throw new Error('Project ID is not defined'); 
}

const metadata = {
  description: 'Web3Modal Example',
  // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  
  name: 'Web3Modal', 
  url: 'https://web3modal.com',
};

// Create wagmiConfig
export const wagmiConfig = defaultWagmiConfig({
  chains: [mainnet, sepolia], 
  
  // Optional - true by default
  enableCoinbase: true, 
  
  // Optional - true by default
  enableEIP6963: true, 
  
  // Optional - true by default
  enableInjected: true,
  
  enableWalletConnect: true,
  
  // required
  metadata, 
  
  // required
  projectId, 
  
  // required
  ssr: true, 
  
  storage: createStorage({
    storage: cookieStorage,
  }), // Optional - true by default
  // ...wagmiOptions, // Optional - Override createConfig parameters
});
