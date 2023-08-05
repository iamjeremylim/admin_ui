import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';
import { Stores } from '@/features/stores';
import { Products } from '@/features/products';
import { User } from '@/features/user';
import { Home } from '@/features/home';
import { Product } from '@/features/product';
import { Footer } from '@/components/footer';
import { Menu } from '@/components/menu';
import { NavBar } from '@/components/navbar';
import './styles/global.scss';

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
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
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <Product />,
        },
        {
          path: '/users/:id',
          element: <User />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
