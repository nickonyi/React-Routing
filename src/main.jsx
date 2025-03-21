import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './components/profile';
import Popeye from './components/popeye';
import Spinach from './components/spinach';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'profile',
    element: <Profile />,
    children: [
      { path: 'spinach', element: <Spinach /> },
      { path: 'popeye', element: <Popeye /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
