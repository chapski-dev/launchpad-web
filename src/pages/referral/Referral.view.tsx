import React, { FC } from 'react'

import { Container } from 'ui'
import * as S from './style'

interface IReferralViewProps {
  first: string
  setFirst: React.Dispatch<React.SetStateAction<string>>
}

export const ReferralView: FC<IReferralViewProps> = ({ first, setFirst }) => (
  <Container>
    <S.Text>Referral</S.Text>
    {/* Your screen code here */}
    <button
      children="Click me"
      onClick={() => setFirst((prevSt: string) => prevSt + 1)}
    />
    <p>{first}</p>
  </Container>
)
