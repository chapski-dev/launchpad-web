import { FC, PropsWithChildren } from 'react'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      bg: string
      bgSecondary: string
      text: string
      hint: string
      link: string
      btn: string
      btnText: string
      success: string
    }
    gradient: {
      g1: string
      g2: string
    }
  }
}

export type FCWithChildren<T = object> = FC<PropsWithChildren<T>>
