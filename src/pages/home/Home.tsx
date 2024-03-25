import React, { FC } from 'react'

import { useThemeContext } from '@/providers/ThemeProvider/ThemeProvider'
import { HomeView } from './Home.view'

interface IHomeProps {}

export const Home: FC<IHomeProps> = () => {
  const { updateCurrentTheme } = useThemeContext()

  return <HomeView updateTheme={updateCurrentTheme} />
}
