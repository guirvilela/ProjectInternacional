import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import PrincipalComponent from '../pages/principal';
import UsersComponent from '../pages/users';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrincipalComponent />} path="/" />
        <Route element={<UsersComponent />} path="/users" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
