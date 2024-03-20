import React, { FC } from 'react';

import { Container } from '@/ui/layout/Container/Container';

import * as S from './style';

interface IPostViewProps {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
}

export const PostView: FC<IPostViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Post</S.Text>
    {/* Your screen code here */}
    <button
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
      children={first}
    />
  </Container>
);
