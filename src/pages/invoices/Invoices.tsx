'use client';

import React, { FC, useState } from 'react';

import { InvoicesView } from './Invoices.view';

interface IInvoicesProps {}

export const Invoices:FC<IInvoicesProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <InvoicesView
      first={first}
      setFirst={setFirst}
    />
  );
};
