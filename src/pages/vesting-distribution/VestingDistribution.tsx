'use client';

import React, { FC, useState } from 'react';

import { VestingDistributionView } from './VestingDistribution.view';

interface IVestingDistributionProps {}

export const VestingDistribution:FC<IVestingDistributionProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <VestingDistributionView
      first={first}
      setFirst={setFirst}
    />
  );
};
