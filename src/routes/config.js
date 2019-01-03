import { lazy } from "react";
const Home = lazy(() => import('../pages/home'));
const Admin = lazy(() => import('../pages/admin'));
const Login = lazy(() => import('../pages/login'));
const Checkout = lazy(() => import('../pages/checkout'));
const AboutUs = lazy(() => import('../pages/aboutUs'));
const Error = lazy(() => import('../pages/error'));

export const routes = [
  {
    path: '/',
    component: Home,
    displayName: 'Home'
  },
  {
    path: '/login',
    component: Login,
    displayName: 'Login'
  },
  {
    path: '/checkout',
    component: Checkout,
    displayName: 'Checkout'
  },
  {
    path: '/aboutUs',
    component: AboutUs,
    displayName: 'AboutUs'
  },
  {
    path: '*',
    component: Error,
    displayName: 'Error'
  }
];

export const privateRoutes = [
  {
    path: '/admin',
    component: Admin,
    displayName: 'Admin'
  }
];