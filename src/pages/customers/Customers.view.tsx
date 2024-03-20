import React, { FC } from 'react';

import { Container } from '@/ui/layout/Container/Container';

import * as S from './style';

interface ICustomersViewProps {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomersView: FC<ICustomersViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Customers</S.Text>
    {/* Your screen code here */}
    <button
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
      children={first}
    />
  </Container>
);
