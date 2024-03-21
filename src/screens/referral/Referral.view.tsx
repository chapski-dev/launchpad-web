import React, { FC } from 'react';

import { Container } from '@/ui/layout/Container/Container';

import * as S from './style';

interface IReferralViewProps {
  first: string;
  setFirst: React.Dispatch<React.SetStateAction<string>>;
}

export const ReferralView: FC<IReferralViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Referral</S.Text>
    {/* Your screen code here */}
    <button
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
      children={first}
    />
  </Container>
);
