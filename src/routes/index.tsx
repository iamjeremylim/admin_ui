import { createBrowserRouter, Outlet, useRoutes } from 'react-router-dom';
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

const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
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
              <Outlet />
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
