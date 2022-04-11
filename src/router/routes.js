import  Login  from '../pages/Login';

export const routes = [
  {
    name: 'Login',
    path: () => {
      return '/login';
    },
    exact: true,
    component: Login
  }
];
