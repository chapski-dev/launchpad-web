import { styled } from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`

export const Wrapper = styled.div`
  min-width: 108px;
  min-height: 108px;
  height: 100%;

  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #fb73e0, #0098ea) border-box;
  border-radius: 28px;
  box-shadow: 0px 10px 24px 0px #fffeff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #efeff3;
  border-radius: 28px;
`

export const WrapInside = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`

export const Top = styled.div``

export const StoriesIcon = styled.div`
  display: flex;
  height: 21px;
  width: 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border-top: 1px solid rgba(255, 255, 255, 0.32);
  background: #000;
  box-shadow: 0px 4px 16px -6px rgba(0, 0, 0, 0.6);
`

export const Text = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  color: black;
`
export const TextSmall = styled.span`
  margin-top: -5px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.14px;
  color: black;
`

export const Bot = styled.div`
  display: flex;
  align-items: center;
  max-width: 80px;
  padding-top: 8px;
`

export const StroiesBlockWrapper = styled.div`
  position: absolute;
  z-index: 9999999;
  top: -58px;
`
