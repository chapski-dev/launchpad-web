import { FC } from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { useTonAddress } from '@tonconnect/ui-react'
// import { XTONUserSDK } from '@xton/user-sdk'
// import { useTelegramContext } from 'app/providers/TelegramProvider'
// import dayjs from 'dayjs'
// import { BackButton } from 'features/BackButton'
// import { Layout } from 'features/Layout/Layout'
// import Head from 'next/head'
// import { useRouter } from 'next/router'
// import { Container } from 'ui/Container/Container'
import { Container } from '@/ui'
import * as S from './style'
import {
  SvgLinkClaimedItem,
  SvgLockmini,
  SvgUnlock,
  SvgWarningCircle,
} from '../../ui/icons'

const VestingDistribution: FC = () => {
  // const { webApp } = useTelegramContext()

  // const router = useRouter()

  // const { projectId } = router.query

  // const tonUserWalletAddress = useTonAddress()

  // console.log(projectId)

  // const { data: currentUserSaleState } = useQuery({
  //   queryKey: ['current-sale-state'],
  //   queryFn: () =>
  //     XTONUserSDK.queryUserSaleState(
  //       projectId as string,
  //       'ton',
  //       tonUserWalletAddress
  //     ),
  //   enabled: !!projectId,
  // })

  // console.log(currentUserSaleState)

  // const scheduleDifference = useMemo(() => {
  //   return dayjs(currentUserSaleState?.schedule?.end).diff(
  //     dayjs(currentUserSaleState?.schedule?.start),
  //     'day'
  //   )
  // }, [
  //   currentUserSaleState?.schedule?.end,
  //   currentUserSaleState?.schedule?.start,
  // ])

  return (
    <>
      <header>
        <title>VestingDistribution</title>
      </header>
      <main>
        <S.Wrapper>
          <S.TemporaryWrapper>
            <Container>
              {/* <S.BalanceBlock>
              <S.TitleBalance>Balance</S.TitleBalance>
              <S.Balance>
                {currentUserSaleState?.currentBalance.toFixed(2)} XTON
              </S.Balance>
              {currentUserSaleState?.lockedBalance && (
                <S.BalanceLocked>
                  <SvgLockmini /> Locked Balance:{' '}
                  {currentUserSaleState.lockedBalance.toFixed(2)} XTON
                </S.BalanceLocked>
              )}
            </S.BalanceBlock> */}
              <S.BalanceBlock>
                <S.TitleBalance>Balance</S.TitleBalance>
                <S.Balance>XTON</S.Balance>

                <S.BalanceLocked>
                  <SvgLockmini /> Locked Balance: XTON
                </S.BalanceLocked>
              </S.BalanceBlock>

              {/* {currentUserSaleState?.schedule && (
              <S.UnlockScheduleBlock>
                <S.TitleUnlock>
                  <SvgWarningCircle />
                  Unlock schedule
                </S.TitleUnlock>
                <S.DescrUnlock>
                  Vesting schedule lasts for {scheduleDifference} days, starting
                  from
                  <br />
                  <span>
                    {dayjs(currentUserSaleState?.schedule?.start).format(
                      'YYYY-MM-DD'
                    )}{' '}
                    ending on{' '}
                    {dayjs(currentUserSaleState.schedule.end).format(
                      'YYYY-MM-DD'
                    )}
                    .
                  </span>
                </S.DescrUnlock>
              </S.UnlockScheduleBlock>
            )} */}

              <S.UnlockScheduleBlock>
                <S.TitleUnlock>
                  <SvgWarningCircle />
                  Unlock schedule
                </S.TitleUnlock>
                <S.DescrUnlock>
                  Vesting schedule lasts for days, starting from
                  <br />
                  {/* <span>
                    {dayjs(currentUserSaleState?.schedule?.start).format(
                      'YYYY-MM-DD'
                    )}{' '}
                    ending on{' '}
                    {dayjs(currentUserSaleState.schedule.end).format(
                      'YYYY-MM-DD'
                    )}
                    .
                  </span> */}
                  <span>ending on .</span>
                </S.DescrUnlock>
              </S.UnlockScheduleBlock>
            </Container>

            <S.ClaimedItemsWrapper>
              {/* <S.ClaimedItemsWrapperInner>
              {currentUserSaleState?.previousClaims?.map(
                ({ amount, symbol, time, txLink }, idx) => (
                  <S.ClaimedItem
                    key={idx}
                    onClick={() => webApp.openLink(txLink)}
                  >
                    <S.InfoBlock>
                      <S.IconUnLock>
                        <SvgUnlock />
                      </S.IconUnLock>
                      <S.InfoClaimed>
                        <S.Count>
                          {amount.toFixed(2)} {symbol} <span>Claimed</span>
                        </S.Count>
                        <S.Date>{dayjs(time).toString()}</S.Date>
                      </S.InfoClaimed>
                    </S.InfoBlock>
                    <S.ClaimedLink>
                      <SvgLinkClaimedItem />
                    </S.ClaimedLink>
                  </S.ClaimedItem>
                )
              )}
            </S.ClaimedItemsWrapperInner> */}
              <S.ClaimedItemsWrapperInner>
                <S.ClaimedItem>
                  <S.InfoBlock>
                    <S.IconUnLock>
                      <SvgUnlock />
                    </S.IconUnLock>
                    <S.InfoClaimed>
                      <S.Count>
                        <span>Claimed</span>
                      </S.Count>
                      <S.Date></S.Date>
                    </S.InfoClaimed>
                  </S.InfoBlock>
                  <S.ClaimedLink>
                    <SvgLinkClaimedItem />
                  </S.ClaimedLink>
                </S.ClaimedItem>
              </S.ClaimedItemsWrapperInner>

              {/* {currentUserSaleState?.availableClaim && (
              <S.ClaimedItemsWrapperInner>
                <S.ClaimedItem>
                  <S.InfoBlock>
                    <S.IconLock>
                      <SvgUnlock />
                    </S.IconLock>
                    <S.InfoClaimed>
                      <S.Count>
                        Claimable:{' '}
                        {currentUserSaleState?.availableClaim.amount.toFixed(2)}{' '}
                        {currentUserSaleState?.availableClaim.symbol}{' '}
                      </S.Count>
                    </S.InfoClaimed>
                  </S.InfoBlock>
                  <S.ClaimedBox>Claim</S.ClaimedBox>
                </S.ClaimedItem>
              </S.ClaimedItemsWrapperInner>
            )} */}

              <S.ClaimedItemsWrapperInner>
                <S.ClaimedItem>
                  <S.InfoBlock>
                    <S.IconLock>
                      <SvgUnlock />
                    </S.IconLock>
                    <S.InfoClaimed>
                      <S.Count>Claimable: </S.Count>
                    </S.InfoClaimed>
                  </S.InfoBlock>
                  <S.ClaimedBox>Claim</S.ClaimedBox>
                </S.ClaimedItem>
              </S.ClaimedItemsWrapperInner>

              {/* <S.ClaimedItemsWrapperInner>
              {CLAIMABLE_ITEM_MOCK.map(({ count }, idx) => (
                <S.ClaimedItem key={idx}>
                  <S.InfoBlock>
                    <S.IconLock>
                      <SvgUnlock />
                    </S.IconLock>
                    <S.InfoClaimed>
                      <S.Count>Claimable: {count} ETH </S.Count>
                    </S.InfoClaimed>
                  </S.InfoBlock>
                  <S.ClaimedBox>Claim</S.ClaimedBox>
                </S.ClaimedItem>
              ))}
            </S.ClaimedItemsWrapperInner> */}
            </S.ClaimedItemsWrapper>
          </S.TemporaryWrapper>
        </S.Wrapper>
      </main>
    </>
  )
}

export default VestingDistribution
