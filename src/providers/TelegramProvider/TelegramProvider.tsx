import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { WebApp } from '@/types/telegram';
import { TelegramUser } from './types';
import { includeWallets } from '../WalletsConnectProvider/wallets';


const MANIFEST_URL = 'https://tokenova.fi/tonconnect-manifest.json';

export type TelegramContextType = {
  webApp?: WebApp;
  user?: TelegramUser;
};

export const TelegramContext = createContext<TelegramContextType>({});

export const TelegramProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [webApp, setWebApp] = useState<WebApp | null>(null);

  useEffect(() => {
    const app = window.Telegram?.WebApp;

    if (app) {
      app.ready();

      setWebApp(app);
    }
  }, []);

  const value = useMemo(() => webApp
    ? {
      unsafeData: webApp.initDataUnsafe,
      user: webApp.initDataUnsafe.user,
      webApp,
    }
    : {}, [webApp]);

  return (
    <TonConnectUIProvider
    manifestUrl={MANIFEST_URL}
    uiPreferences={{
      theme: 'SYSTEM',
    }}
    walletsListConfiguration={{ includeWallets: includeWallets }}
  >
    <TelegramContext.Provider value={value}>
      <script src="/js/telegram-web-app.js" />
      {children}
    </TelegramContext.Provider>
    </TonConnectUIProvider>
  );
};

export const useTelegramContext = () => {
  const telegramContext = useContext(TelegramContext);

  if (!telegramContext) {
    throw new Error(
      'telegramContext has to be used within <TelegramProvider />',
    );
  }

  return telegramContext;
};
