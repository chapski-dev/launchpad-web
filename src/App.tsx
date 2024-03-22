import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage, Home, Post, Profile, Project, Referral, VestingDistribution } from './pages';
import ReactQueryProvider from './providers/ReactQueryProvider';
import { TelegramProvider } from './providers/TelegramProvider';
import { WalletsConnectProvider } from './providers/WalletsConnectProvider';
import { AppRoutes } from './router';
import { RootLayout } from './ui/layout/RootLayout';

const router = createBrowserRouter([
  {
    children: [
      {
        element: <Home />,
        path: AppRoutes.home,
      },
      {
        element: <Post />,
        path: AppRoutes.post,
      },
      {
        element: <Profile />,
        path: AppRoutes.profile,
      },
      {
        element: <Project />,
        path: AppRoutes.project,
      },
      {
        element: <Referral />,
        path: AppRoutes.referral,
      },
      {
        element: <VestingDistribution />,
        path: AppRoutes['vesting-distribution'],
      },
    ],
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
]);

function App() {
  return (
    <WalletsConnectProvider>
      <ReactQueryProvider>
          <TelegramProvider>
            <RouterProvider router={router} />
          </TelegramProvider>
      </ReactQueryProvider>
    </WalletsConnectProvider>
  );
}

export default App;
