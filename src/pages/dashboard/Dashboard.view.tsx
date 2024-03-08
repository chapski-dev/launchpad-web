import React, { FC } from 'react';

import { Container } from '@/ui';

import * as S from './style';

interface IDashboardViewProps {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
}

export const DashboardView: FC<IDashboardViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Dashboard</S.Text>
    {/* Your screen code here */}
    <button
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
      children={first}
    />
  </Container>
);
