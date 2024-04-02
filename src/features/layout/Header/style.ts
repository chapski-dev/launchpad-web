import { styled } from 'styled-components'

export const Header = styled.header`
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`

export const ConnectButton = styled.button`
  background: ${({ theme }) => theme.color.btn};
  color: ${({ theme }) => theme.color.btnText};
  border: none;
  padding: 15px 12px;
  border-radius: 15px;
  font-size: 14px;
`
