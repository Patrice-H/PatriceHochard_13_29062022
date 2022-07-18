import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Error404 from '../pages/Error404';

/**
 * List of routes
 */
export const routesList = [
  {
    id: 'home-01',
    path: '/',
    element: <Home />,
  },
  {
    id: 'signin-02',
    path: '/signin',
    element: <SignIn />,
  },
  {
    id: 'profile-03',
    path: '/profile',
    element: <Profile />,
  },
  {
    id: 'error-04',
    path: '*',
    element: <Error404 />,
  },
];
