'use client';

import { TonConnectButton } from '@tonconnect/ui-react';
import Link from 'next/link';
import React from 'react';

import { Routes } from '@/router';

import * as S from './style';

export const Header = () => (
  <S.Header>
    <S.Nav>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
      <w3m-button />
      <TonConnectButton />
    </S.Nav>
  </S.Header>
);

const links = [
  {
    href: Routes.home,
    name: 'Home',
  },
  {
    href: Routes.post,
    name: 'Post',
  },
  {
    href: Routes.profile,
    name: 'Profile',
  },
  {
    href: Routes.project,
    name: 'Project',
  },
  {
    href: Routes.referral,
    name: 'Referral',
  },
  {
    href: Routes['vesting-distribution'],
    name: 'Vesting Distribution',
  },
];
