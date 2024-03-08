'use client';

import React, { FC, useState } from 'react';

import { DashboardView } from './Dashboard.view';

interface IDashboardProps {}

export const Dashboard:FC<IDashboardProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <DashboardView
      first={first}
      setFirst={setFirst}
    />
  );
};
