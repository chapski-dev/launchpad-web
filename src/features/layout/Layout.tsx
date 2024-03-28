import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { ProfileBlock } from './ProfileBlock/ProfileBlock'
import * as S from './style'

export const Layout = () => (
  <S.Wrapper>
    <Header />
    <S.ProfileBlockWrapper>
      <ProfileBlock />
    </S.ProfileBlockWrapper>
    <div id="detail">
      <Outlet />
    </div>
  </S.Wrapper>
)
