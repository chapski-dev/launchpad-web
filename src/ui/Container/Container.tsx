import React, { FC } from 'react'

import * as S from './style'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <S.Container className={className}>{children}</S.Container>
)
