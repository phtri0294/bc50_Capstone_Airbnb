import { Route } from 'react-router-dom';
import { lazy } from 'react';

const routes = [
  {
    path: '',
    element: lazy(() => import('pages/HomeTemplate')),
    nested: [
      {
        path: '',
        element: lazy(() => import('pages/HomeTemplate/HomePage')),
      },
    ],
  },
  {
    path: 'admin',
    element: lazy(() => import('../pages/AdminTemplate')),
    nested: [
      {
        path: 'user',
        element: lazy(() => import('../pages/AdminTemplate/User')),
      },
      {
        path: 'add-user',
        element: lazy(() => import('../pages/AdminTemplate/User/AddUser/')),
      },
      {
        path: 'edit-user/:id',
        element: lazy(() => import('../pages/AdminTemplate/User/EditUser/')),
      },
      {
        path: 'room',
        element: lazy(() => import('../pages/AdminTemplate/Room')),
      },
      {
        path: 'add-room',
        element: lazy(() => import('../pages/AdminTemplate/Room/AddRoom')),
      },
      {
        path: 'edit-room/:id',
        element: lazy(() => import('../pages/AdminTemplate/Room/EditRoom')),
      },
      {
        path: 'location',
        element: lazy(() => import('../pages/AdminTemplate/Location')),
      },
      {
        path: 'add-location',
        element: lazy(() => import('../pages/AdminTemplate/Location/AddLocation/')),
      },
      {
        path: 'edit-location/:id',
        element: lazy(() => import('../pages/AdminTemplate/Location/EditLocation/')),
      },
    ],
  },
  {
    path: 'auth',
    element: lazy(() => import('../pages/AdminTemplate/AuthPage')),
  },
  {
    path: 'register',
    element: lazy(() => import('../pages/AdminTemplate/RegisterPage')),
  },
  // {
  //   path: '/login',
  //   element: lazy(() => import('./../pages/HomeTemplate/Login/Login')),
  // },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.nested) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        >
          {route.nested.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<route.element />}
        />
      );
    }
  });
};

export default renderRoutes;
