import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/providers/ThemeProvider'
import { GlobalStyle } from './assets/style/GlobalStyle'
import { Layout } from './features/layout/Layout'
import {
  ErrorPage,
  Home,
  Post,
  Profile,
  Project,
  Referral,
  VestingDistribution,
} from './pages'
import ReactQueryProvider from './providers/ReactQueryProvider'
import { TelegramProvider } from './providers/TelegramProvider'
import { WalletsConnectProvider } from './providers/WalletsConnectProvider'
import { AppRoutes } from './router'

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
    element: <Layout />,
    errorElement: <ErrorPage />,
    path: '/',
  },
])

function App() {
  return (
    <>
      <WalletsConnectProvider>
        <ReactQueryProvider>
          <ThemeProvider>
            <TelegramProvider>
              <RouterProvider router={router} />
              <GlobalStyle />
            </TelegramProvider>
          </ThemeProvider>
        </ReactQueryProvider>
      </WalletsConnectProvider>
      <script src="https://telegram.org/js/telegram-web-app.js" />
    </>
  )
}

export default App
