import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export const RootLayout = () => (
  <>
    <Header />
    <div id="detail">
      <Outlet />
    </div>
  </>
);
