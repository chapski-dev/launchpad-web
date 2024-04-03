import { FC } from 'react'
import { launchpadWebAppUrl } from 'constants/api'
import * as S from './style'

type PostCardProps = {
  title: string
  image: string
  fileName: string
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { title, image, fileName } = props

  return (
    <S.Wrapper>
      <img
        alt="post_image"
        height={170}
        src={launchpadWebAppUrl + image}
        style={{
          width: '50%',
          height: 'auto',

          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
        width={370}
      />
      <S.InfoBlock>
        <S.Title>{title}</S.Title>
      </S.InfoBlock>
    </S.Wrapper>
  )
}
