import React, { FC } from 'react';

import { Container } from '@/ui/layout/Container/Container';
import { Modal } from '@/ui/Modal';

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
      onClick={handleModal}
      children="Открыть модалку"
    />
    <Modal
      title="Text in a modal"
      open={modalOpen}
      onClose={handleModal}
    >
      <Container>
        <h5 style={{ color: '#000' }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</h5>
      </Container>
    </Modal>
  </Container>
);
