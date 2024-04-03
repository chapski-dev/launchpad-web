import { FC } from 'react'
import { WaitList } from './components'
import { Chip } from './components/Chip/Chip'
import * as S from './style'
import mock from '../../../../assets/icons/mock.png'

type ProjectInfoHeaderProps = {
  image: string
  title: string
  description: string
  // network: keyof typeof Chains
}

export const ProjectInfoHeader: FC<ProjectInfoHeaderProps> = (props) => {
  const { image, title, description } = props

  return (
    <S.Wrapper>
      <S.Image alt="project_image" src={image || mock} />
      <S.InfoWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.TagsWrapper>
          <Chip text="DEMO PROJECT" />
          {/* <Chip text={Chains[network].toUpperCase()} /> */}
        </S.TagsWrapper>
      </S.InfoWrapper>
      <WaitList address="FG4Y...FW42" />
    </S.Wrapper>
  )
}
