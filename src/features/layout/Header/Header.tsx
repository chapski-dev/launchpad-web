import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ConnectWalletModal } from '@/modals'
import { AppRoutes } from '@/router'
import * as S from './style'

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          <button children="Connect Wallet" onClick={() => setOpen(true)} />
        </S.Nav>
      </S.Header>
      <ConnectWalletModal onClose={setOpen} open={open} />
    </>
  )
}

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
]
