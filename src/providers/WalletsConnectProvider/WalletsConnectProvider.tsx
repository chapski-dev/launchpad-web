'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import React, { FC, PropsWithChildren } from 'react';
import { cookieStorage, createStorage, State, WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';

import { projectId, wagmiConfig } from '@/config';

import { includeWallets } from './wallets';

// Setup queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error('Project ID is not defined'); 
}

// Create modal
createWeb3Modal({
  enableAnalytics: true,
  projectId,
  wagmiConfig: wagmiConfig, // Optional - defaults to your Cloud configuration
});

const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!walletConnectProjectId) {
  throw new Error('Wallet connect project id us not defined');
}

const walletConnectMetadata = {
  description:
    'XTON is the first launchpad that brings together $43B liquidity of EVM chains, 800M users of Telegram and the fastest blockchain in the world - TON.',
  // origin must match your domain & subdomain
  icons: ['https://tokenova.fi/logo.png'],
  
  name: 'XTON', 
  url: 'https://tokenova.fi/',
};

const walletConnectConfig = defaultWagmiConfig({
  chains: [mainnet],
  enableInjected: true,
  enableWalletConnect: true,
  metadata: walletConnectMetadata,
  projectId: walletConnectProjectId,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
});

createWeb3Modal({
  enableAnalytics: true,
  projectId: walletConnectProjectId,
  wagmiConfig: walletConnectConfig, // Optional - defaults to your Cloud configuration
});

type WalletsConnectProviderProps = PropsWithChildren & {
  initialState?: State;
};
export const WalletsConnectProvider: FC<WalletsConnectProviderProps> = (props) => {
  const { children, initialState } = props;

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <TonConnectUIProvider
          manifestUrl={MANIFEST_URL}
          uiPreferences={{
            theme: 'SYSTEM',
          }}
          walletsListConfiguration={{
            includeWallets: includeWallets,
          }}
        >
          {children}
        </TonConnectUIProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

const MANIFEST_URL = 'https://tokenova.fi/tonconnect-manifest.json';
