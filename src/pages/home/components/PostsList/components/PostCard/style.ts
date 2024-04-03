import { styled } from 'styled-components'

export const Wrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`

// export const SImage = styled()`
//   border-radius: 10px 10px 0 0;
// `

export const InfoBlock = styled.div`
  padding: 16px;
  border-radius: 0 0 10px 10px;
  background-color: ${({ theme }) => theme.color.bgSecondary};
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  width: 50%;
`

export const Title = styled.h4`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  padding: 0;

  color: ${({ theme }) => theme.color.text};
`
