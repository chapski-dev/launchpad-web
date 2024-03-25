import React, { FC } from 'react';

import { Container } from '@/ui';
import * as S from './style';


interface IProfileViewProps {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
}

export const ProfileView: FC<IProfileViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Profile</S.Text>
    {/* Your screen code here */}
    <button
      children="Click me"
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
    />
    <p>{first}</p>
  </Container>
);
