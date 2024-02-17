import { Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from '../routes.js' 
import { SHOP_ROUTE } from '../utils/consts.js';
import { useContext } from 'react';
import { Context } from '../App.jsx'; 

const AppRouter = () => {

  const {user, devices} = useContext(Context)

  return (
  <Routes>
    {user.isAuth && authRoutes.map(({path, Component})=>
      <Route exact key={path} path={path} element={<Component/>} />
    )}
    {publicRoutes.map(({path, Component})=>
      <Route exact key={path} path={path} element={<Component/>} />
    )}
    <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
  </Routes>
  );
};

export default AppRouter;
