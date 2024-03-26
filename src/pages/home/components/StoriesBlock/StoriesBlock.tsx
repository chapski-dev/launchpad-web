import { FC, useCallback, useState } from 'react'
import coin1 from './assets/coin1.png'
import coin2 from './assets/coin2.png'
import coin3 from './assets/coin3.png'
import storyBg1 from './assets/story_bg1.png'
import storyBg2 from './assets/story_bg2.png'
import storyBg3 from './assets/story_bg3.png'
import TG from './assets/TG.svg'
import TON from './assets/TON.svg'
import XTON from './assets/XTON.svg'
import { STORIES_MOCK } from './mock'
import * as S from './style'
// import storyBg2 from '../../../../../../public/image/stories/assets/story_bg2.png'

type StoriesBlockProps = {}

const storiesBlocksMock = [
  {
    label: 'About XTON',
    name: 'XTON',
    id: 1,
  },
  {
    label: 'About TON',
    name: 'TON',
    id: 2,
  },
  {
    label: 'How to create TON Space wallet',
    name: 'TG',
    id: 3,
    isDescription: true,
  },
]

export const StoriesBlock: FC<StoriesBlockProps> = () => {
  const [currentStoryBlockId, setCurrentStoryBlockId] = useState<number>(1)
  const [isStoriesOpen, setIsStoriesOpen] = useState<boolean>(false)

  const cardBg = (id: number) => {
    switch (id) {
      case 1:
        return storyBg1
      case 2:
        return storyBg2
      case 3:
        return storyBg3
    }
  }

  const coin = (id: number) => {
    switch (id) {
      case 1:
        return coin1
      case 2:
        return coin2
      case 3:
        return coin3
    }
  }
  const socialMedia = (id: number) => {
    switch (id) {
      case 1:
        return XTON
      case 2:
        return TON
      case 3:
        return TG
    }
  }
  // const handleStoryClick = useCallback(() => {
  //   setIsStoriesOpen(false)

  //   document.body.style.overflowY = 'auto'
  //   document.body.style.height = 'auto'

  //   if (webApp?.platform === 'ios') {
  //     document.body.style.position = 'relative'
  //   }
  // }, [webApp?.platform])

  return (
    <>
      <S.MainWrapper>
        {isStoriesOpen && (
          <S.StroiesBlockWrapper>
            {/* <StoriesViewer
              onClose={handleStoryClick}
              stories={STORIES_MOCK[currentStoryBlockId]}
            /> */}
          </S.StroiesBlockWrapper>
        )}
        {storiesBlocksMock.map(({ label, name, id, isDescription }) => (
          <S.Wrapper
            key={id}
            onClick={() => {
              setCurrentStoryBlockId(id)
              setIsStoriesOpen(true)
            }}
          >
            <S.Wrap
              style={{
                backgroundImage: `url(${cardBg(id)})`,
                backgroundRepeat: 'no-repeat',
              }}
            >
              <S.WrapInside
                style={{
                  backgroundImage: `url(${coin(id)})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0',
                  borderRadius: '25px',
                }}
              >
                <S.Top>
                  <S.StoriesIcon>
                    <img
                      alt={`${name} Icon`}
                      height={13}
                      src={socialMedia(id)}
                      width={13}
                    />
                  </S.StoriesIcon>
                </S.Top>
                <S.Bot>
                  {isDescription ? (
                    <S.TextSmall>{label}</S.TextSmall>
                  ) : (
                    <S.Text>{label}</S.Text>
                  )}
                </S.Bot>
              </S.WrapInside>
            </S.Wrap>
          </S.Wrapper>
        ))}
      </S.MainWrapper>
    </>
  )
}
