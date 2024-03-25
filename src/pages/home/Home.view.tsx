import { FC } from 'react'
import { CurrentThemeType } from '@/providers/ThemeProvider/ThemeProvider'
import * as S from './style'

interface IHomeViewProps {
  updateTheme: (theme: CurrentThemeType) => void
}

export const HomeView: FC<IHomeViewProps> = (props) => {
  const { updateTheme } = props

  return (
    <main>
      <S.Text>Text</S.Text>
      <button onClick={() => updateTheme('light')}>light theme</button>
      <button onClick={() => updateTheme('dark')}>dark theme</button>
    </main>
  )
}
