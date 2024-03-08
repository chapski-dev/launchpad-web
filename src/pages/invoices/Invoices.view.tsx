import React, { FC } from 'react';

import { Container } from '@/ui';

import * as S from './style';

interface IInvoicesViewProps {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
}

export const InvoicesView: FC<IInvoicesViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Invoices</S.Text>
    {/* Your screen code here */}
    <button
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
      children={first}
    />
  </Container>
);
