'use client';

import React, { FC, useState } from 'react';

import { ProfileView } from './Profile.view';

interface IProfileProps { }

const Profile: FC<IProfileProps> = () => {
  const [first, setFirst] = useState('');
  return (
    <ProfileView
      first={first}
      setFirst={setFirst}
    />
  );
};

export default Profile;
