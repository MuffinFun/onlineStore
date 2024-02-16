import AdminPage from './pages/AdminPage.jsx';
import Basket from './pages/Basket.jsx';
import Shop from './pages/Shop.jsx';
import DevicePage from './pages/DevicePage.jsx';
import Auth from './pages/Auth.jsx';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/consts.js';
import DevicePage from './pages/DevicePage.jsx';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
  },
];
