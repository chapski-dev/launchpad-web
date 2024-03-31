import { FC } from 'react'
import { CurrentThemeType } from '@/providers/ThemeProvider/ThemeProvider'
import { PostsList } from './components/PostsList/PostsList'
import { ProjectList } from './components/Projectslist/ProjectsList'
import * as S from './style'

interface IHomeViewProps {
  updateTheme: (theme: CurrentThemeType) => void
}

export const HomeView: FC<IHomeViewProps> = (props) => {
  const { updateTheme } = props

  return (
    <main>
      {/* <button onClick={() => updateTheme('light')}>light theme</button>
      <button onClick={() => updateTheme('dark')}>dark theme</button> */}
      <ProjectList search="" />
      <PostsList />
    </main>
  )
}
