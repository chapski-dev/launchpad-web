'use client';

import Script from 'next/script';
import { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import { WebApp } from '@/types/telegram';

import { TelegramUser } from './types';

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
    <TelegramContext.Provider value={value}>
      <Script src="/js/telegram-web-app.js" strategy="afterInteractive" />
      {children}
    </TelegramContext.Provider>
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
