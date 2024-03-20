'use client';

import React, { FC, useState } from 'react';

import { PostView } from './Post.view';

interface IPostProps {}

export const Post:FC<IPostProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <PostView
      first={first}
      setFirst={setFirst}
    />
  );
};
