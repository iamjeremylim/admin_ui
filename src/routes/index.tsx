import { Outlet, useRoutes } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/react-query';
import { Stores } from '@/features/stores';
import { User } from '@/features/user';
import { Home } from '@/features/home';
import { Footer } from '@/components/footer';
import { Menu } from '@/components/menu';
import { NavBar } from '@/components/navbar';
import '../styles/global.scss';
import { ErrorBoundary } from 'react-error-boundary';
import { SnackbarProvider } from 'notistack';

const ErrorFallback = () => {
  return (
    <div className="errorContainer">
      Oops! We are experiencing a little problem. Please allow us some time to fix it, thank you.
    </div>
  );
};

const Layout = () => {
  return (
    <div className="main">
      <NavBar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
              <SnackbarProvider maxSnack={3}>
                <Outlet />
              </SnackbarProvider>
            </QueryClientProvider>
          </ErrorBoundary>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/stores',
          element: <Stores />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
      ],
    },
  ];

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
