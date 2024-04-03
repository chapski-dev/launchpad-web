import { FC } from 'react'
import * as S from './style'
import { Modal } from '../../ui/Modal/Modal'

type LoaderPopupProps = {
  onClose: () => void
  open: boolean
  text: string
}

export const LoaderPopup: FC<LoaderPopupProps> = (props) => {
  const { open, onClose } = props
  return (
    <Modal onClose={onClose} open={open} title="Buy XTON">
      <S.Wrap>
        <S.Box>
          {[...Array(20)].map((_, index) => (
            <S.SpanS key={index.toString()} i={index + 1}></S.SpanS>
          ))}
        </S.Box>
        <S.Content>Waiting for Approval Transaction...</S.Content>
      </S.Wrap>
    </Modal>
  )
}
