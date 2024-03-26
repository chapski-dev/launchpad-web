import { FC } from 'react'
import { CurrentThemeType } from '@/providers/ThemeProvider/ThemeProvider'
import { PostsList } from './components/PostsList/PostsList'
import { ProjectList } from './components/Projectslist/ProjectsList'
import { StoriesBlock } from './components/StoriesBlock/StoriesBlock'
import * as S from './style'
import { ProjectInfoHeader } from '../project/components/ProjectInfoHeader/ProjectInfoHeader'
import { Tokenomics } from '../project/components/Tokenomics/Tokenomics'

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

      <StoriesBlock />
      <ProjectList search="" />
      <PostsList />
      <ProjectInfoHeader
        description="fasfas"
        image="asfasf"
        // network={project.network}
        title="asfsaf"
      />
    </main>
  )
}
