import App from '../App';
import Profile from './profile';
import ErrorPage from './errorpage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'profile/:name',
    element: <Profile />,
  },
];

export default routes;
