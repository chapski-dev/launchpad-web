'use client';

import React, { FC, useState } from 'react';

import { ReferralView } from './Referral.view';

interface IReferralProps {}

const Referral:FC<IReferralProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <ReferralView
      first={first}
      setFirst={setFirst}
    />
  );
};

export default Referral;
