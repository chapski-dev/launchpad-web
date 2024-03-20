'use client';

import React, { FC, useState } from 'react';

import { ProjectView } from './Project.view';

interface IProjectProps {}

export const Project:FC<IProjectProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <ProjectView
      first={first}
      setFirst={setFirst}
    />
  );
};
