import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 12px 0;
  /* border-bottom: 1px solid ${({ theme }) => theme.color.hint}; */
  margin-bottom: 12px;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.bgSecondary};
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 26px;
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
  line-height: 34px;
`

export const Description = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.color.hint};
`

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`
