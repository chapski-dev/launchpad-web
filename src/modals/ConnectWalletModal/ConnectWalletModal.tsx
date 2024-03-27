import { FC, ReactElement, useMemo } from 'react'
import { useTonAddress, useTonConnectUI } from '@tonconnect/ui-react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'
import { Modal } from '@/ui'
import { SvgRightArrow, SvgToncoinIcon, SvgWalleticon } from '@/ui/icons'
import { shortenAddress } from '@/utils'
import * as S from './style'

type ConnectWalletModalProps = {
  onClose: (val: boolean) => void
  open: boolean
}

type WalletItemType = 'ton' | 'eth'

type WalletItemsProps = {
  svg: ReactElement
  title: string
  type: WalletItemType
}

const WALLET_ITEMS: WalletItemsProps[] = [
  {
    svg: <SvgToncoinIcon height={32} width={32} />,
    title: 'TON Connect',
    type: 'ton',
  },
  {
    svg: <SvgWalleticon />,
    title: 'WalletConnect',
    type: 'eth',
  },
]

export const ConnectWalletModal: FC<ConnectWalletModalProps> = (props) => {
  const { onClose, open } = props

  const [tonConnectUI] = useTonConnectUI()

  const tonWalletAddress = useTonAddress()

  const { address: ethWalletAddress } = useAccount()

  const { open: openWeb3Modal } = useWeb3Modal()

  const handleWalletClick = (walletType: WalletItemType) => {
    if (walletType === 'ton') {
      tonConnectUI.openModal()

      return
    }

    openWeb3Modal()
  }

  const handleDisconnectClick = (walletType: WalletItemType) => {
    if (walletType === 'ton') {
      tonConnectUI.disconnect()

      return
    }

    openWeb3Modal()
  }

  const walletAddresses: Record<'eth' | 'ton', string> = useMemo(
    () => ({
      eth: ethWalletAddress as string,
      ton: tonWalletAddress,
    }),
    [ethWalletAddress, tonWalletAddress]
  )

  return (
    <Modal onClose={onClose} open={open} title="Connect wallet">
      <S.Wrapper>
        {WALLET_ITEMS.map(({ svg, title, type }, idx) => {
          const isConnected = Boolean(walletAddresses[type])

          return (
            <S.ItemWrapper
              key={idx}
              isActive={!isConnected}
              onClick={!isConnected ? () => handleWalletClick(type) : undefined}
            >
              {!isConnected ? (
                <>
                  <S.LeftBlock>
                    {svg} {title}
                  </S.LeftBlock>
                  <S.RightBlock>
                    <SvgRightArrow />
                  </S.RightBlock>
                </>
              ) : (
                <>
                  <S.LeftBlock>
                    {shortenAddress(walletAddresses[type])}
                  </S.LeftBlock>
                  <S.DisconnectButton
                    children="Disconnect"
                    onClick={() => handleDisconnectClick(type)}
                  />
                </>
              )}
            </S.ItemWrapper>
          )
        })}
      </S.Wrapper>
    </Modal>
  )
}
