import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ConnectWalletModal } from '@/modals'
import { AppRoutes } from '@/router'
import * as S from './style'
import { ProfileBlock } from '../ProfileBlock/ProfileBlock'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const router = useNavigate()

  return (
    <>
      <S.Header>
        <S.Wrapper>
          <div onClick={() => router(AppRoutes.profile)}>
            <ProfileBlock />
          </div>
          <S.ConnectButton
            children="Connect Wallet"
            onClick={() => setOpen(true)}
          />
        </S.Wrapper>
      </S.Header>
      <ConnectWalletModal onClose={setOpen} open={open} />
    </>
  )
}
