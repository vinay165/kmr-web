import { lazy } from "react";
const Home = lazy(() => import('../pages/home'));
const Admin = lazy(() => import('../pages/admin'));
const Orders = lazy(() => import('../pages/orders'));
const Login = lazy(() => import('../pages/login'));
const Checkout = lazy(() => import('../pages/checkout'));
const Cart = lazy(() => import('../pages/cart'));
const AboutUs = lazy(() => import('../pages/aboutUs'));
const Error = lazy(() => import('../pages/error'));

const routes = [
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
    path: '/cart',
    component: Cart,
    displayName: 'Cart'
  },
  {
    path: '/aboutUs',
    component: AboutUs,
    displayName: 'AboutUs'
  },
  {
    path: '/admin',
    component: Admin,
    displayName: 'Admin',
    authProtected: true
  },
  {
    path: '/orders',
    component: Orders,
    displayName: 'Orders',
    authProtected: true
  },
  {
    path: '*',
    component: Error,
    displayName: 'Error'
  }
];

export default routes;