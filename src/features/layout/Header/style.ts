import { styled } from 'styled-components'

export const Header = styled.header`
  padding: 15px;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 15px;
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
`

export const ConnectButton = styled.button`
  background: ${({ theme }) => theme.color.btn};
  color: ${({ theme }) => theme.color.btnText};
  border: none;
  padding: 15px 12px;
  border-radius: 15px;
  font-size: 14px;
`
