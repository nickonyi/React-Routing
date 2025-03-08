import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Profile from './components/Profile.jsx';
import Popeye from './components/Popeye.jsx';
import Spinach from './components/Spinach.jsx';

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
      { path: 'Popeye', element: <Popeye /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
