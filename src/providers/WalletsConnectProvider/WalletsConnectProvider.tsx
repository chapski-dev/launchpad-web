
import { FC, PropsWithChildren } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi';
import { WagmiProvider } from 'wagmi';

import { projectId, wagmiConfig } from '../../config';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

createWeb3Modal({
  enableAnalytics: true,
  projectId: projectId,
  wagmiConfig: wagmiConfig, // Optional - defaults to your Cloud configuration
});

type WalletsConnectProviderProps = PropsWithChildren;

export const WalletsConnectProvider: FC<WalletsConnectProviderProps> = (props) => {
  const { children } = props;

  return (
    <WagmiProvider config={wagmiConfig}>
      {children}
    </WagmiProvider>
  );
};
