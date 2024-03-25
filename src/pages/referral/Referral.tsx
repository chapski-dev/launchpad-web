import React, { FC, useState } from 'react';

import { ReferralView } from './Referral.view';

interface IReferralProps { }

export const Referral: FC<IReferralProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <ReferralView
      first={first}
      setFirst={setFirst}
    />
  );
};
