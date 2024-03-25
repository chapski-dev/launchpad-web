import { defaultWagmiConfig } from '@web3modal/wagmi'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const walletConnectMetadata = {
  description:
    'XTON is the first launchpad that brings together $43B liquidity of EVM chains, 800M users of Telegram and the fastest blockchain in the world - TON.',
  // origin must match your domain & subdomain
  icons: ['https://tokenova.fi/logo.png'],

  name: 'XTON',
  url: 'https://tokenova.fi/',
}

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
  metadata: walletConnectMetadata,

  // required
  projectId,

  // required
  ssr: true,

  storage: createStorage({
    storage: cookieStorage,
  }), // Optional - true by default
  // ...wagmiOptions, // Optional - Override createConfig parameters
})
