import { styled } from 'styled-components'

import { SvgClose } from '../icons'

export const Overlay = styled.div`
  background: #000000;
  opacity: 0.5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  position: fixed;
  transition: opacity 0.3s linear;
  opacity: 0;

  &.open {
    opacity: 0.5;
  }
`

export const Modal = styled.div`
  width: 400px;
  border-radius: 16px 16px 0px 0px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.bg};
  border-radius: 10px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.color.bgSecondary};

  position: fixed;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-duration: 0.1s;
  transition: all 0.1s ease-out;
  -webkit-transition: all 0.1s ease-out;

  &.open {
    animation-duration: 0.1s;
    transition: all 0.1s ease-out;
    -webkit-transition: all 0.1s ease-out;
  }
`

export const Header = styled.div`
  padding: 16px;
  padding-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const Title = styled.h4`
  color: ${({ theme }) => theme.color.text};
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`

export const Close = styled(SvgClose)`
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  path {
    fill: #000;
  }
`

export const Content = styled.div`
  overflow-y: scroll;
  padding-bottom: 16px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`
