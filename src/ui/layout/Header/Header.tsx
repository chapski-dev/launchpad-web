import { TonConnectButton } from '@tonconnect/ui-react';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@/router';
import * as S from './style';

export const Header = () => (
  <S.Header>
    <S.Nav>
      {links.map((link) => (
        <Link
          key={link.name}
          className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          to={link.href}
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
    href: AppRoutes.home,
    name: 'Home',
  },
  {
    href: AppRoutes.post,
    name: 'Post',
  },
  {
    href: AppRoutes.profile,
    name: 'Profile',
  },
  {
    href: AppRoutes.project,
    name: 'Project',
  },
  {
    href: AppRoutes.referral,
    name: 'Referral',
  },
  {
    href: AppRoutes['vesting-distribution'],
    name: 'Vesting Distribution',
  },
];
