import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Contacts from '../pages/Contacts';
import Login from '../pages/Login';
import { useTypedSelector } from './../hooks/useTypedSelector';

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={isAuth ? <Navigate to="/" /> : <Login />} />
      <Route path="/" element={isAuth ? <Contacts /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
