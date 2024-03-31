import { FC } from 'react'
import { Container } from '@/ui'
import * as S from './style'
import {
  SvgLinkClaimedItem,
  SvgLockmini,
  SvgUnlock,
  SvgWarningCircle,
} from '../../ui/icons'

const VestingDistribution: FC = () => {
  return (
    <>
      <header>
        <title>VestingDistribution</title>
      </header>
      <main>
        <S.Wrapper>
          <S.TemporaryWrapper>
            <S.BalanceBlock>
              <S.TitleBalance>Balance</S.TitleBalance>
              <S.Balance>XTON</S.Balance>

              <S.BalanceLocked>
                <SvgLockmini /> Locked Balance: XTON
              </S.BalanceLocked>
            </S.BalanceBlock>
            <S.UnlockScheduleBlock>
              <S.TitleUnlock>
                <SvgWarningCircle />
                Unlock schedule
              </S.TitleUnlock>
              <S.DescrUnlock>
                Vesting schedule lasts for days, starting from
                <br />
                <span>'YYYY-MM-DD' 'YYYY-MM-DD'</span>
                <span>ending on .</span>
              </S.DescrUnlock>
            </S.UnlockScheduleBlock>

            <S.ClaimedItemsWrapper>
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
            </S.ClaimedItemsWrapper>
          </S.TemporaryWrapper>
        </S.Wrapper>
      </main>
    </>
  )
}

export default VestingDistribution
