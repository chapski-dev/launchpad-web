import { styled } from 'styled-components'
export const Wrapper = styled.div`
  padding: 10px 15px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BuyButton = styled.button`
  background: ${({ theme }) => theme.color.btn};
  color: ${({ theme }) => theme.color.btnText};
  border: none;
  margin-top: 10px;
  padding: 15px 12px;
  border-radius: 15px;
  font-size: 14px;
  width: 70px;
  height: 60px;
  cursor: pointer;
`

export const BuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
