'use client';

import React, { FC, useState } from 'react';

import { CustomersView } from './Customers.view';

interface ICustomersProps {}

export const Customers:FC<ICustomersProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <CustomersView
      first={first}
      setFirst={setFirst}
    />
  );
};
