import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/assets/style/theme'
import { FCWithChildren } from '@/types/app'

export type CurrentThemeType = 'light' | 'dark'

type ThemeContextType = {
  currentTheme: CurrentThemeType
  updateCurrentTheme: (themeType: CurrentThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext)

  if (!themeContext) {
    throw new Error('themeContext has to be used within <ThemeProvider />')
  }

  return themeContext
}

export const ThemeProvider: FCWithChildren = (props) => {
  const { children } = props

  const [currentTheme, setCurrentTheme] = useState<CurrentThemeType>('light')

  const theme = useMemo(() => {
    if (currentTheme === 'dark') {
      return darkTheme
    }

    return lightTheme
  }, [currentTheme])

  const value = useMemo(
    () => ({
      currentTheme,
      updateCurrentTheme: setCurrentTheme,
    }),
    [currentTheme]
  )

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  )
}
