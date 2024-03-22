import { FC } from 'react';

import { Container , Modal } from '@/ui';
import * as S from './style';


interface IPostViewProps {
  handleModal: () => void;
  modalOpen: boolean;
}

export const PostView: FC<IPostViewProps> = ({ handleModal, modalOpen }) => (
  <Container>
    <S.Text>Post</S.Text>
    {/* Your screen code here */}
    <button
      children="Открыть модалку"
      onClick={handleModal}
    />
    <Modal
      onClose={handleModal}
      open={modalOpen}
      title="Text in a modal"
    >
      <Container>
        <h5 style={{ color: '#000' }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</h5>
      </Container>
    </Modal>
  </Container>
);
