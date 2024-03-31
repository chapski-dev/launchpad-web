import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ConnectWalletModal } from '@/modals'
import { AppRoutes } from '@/router'
import * as S from './style'
import { ProfileBlock } from '../ProfileBlock/ProfileBlock'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <S.Header>
        <ProfileBlock />
        <S.Nav>
          {links.map((link) => (
            <Link
              key={link.name}
              style={{ textDecoration: 'none', color: 'inherit' }}
              to={link.href}
            >
              {link.name}
            </Link>
          ))}
        </S.Nav>

        <S.ConnectButton
          children="Connect Wallet"
          onClick={() => setOpen(true)}
        />
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
