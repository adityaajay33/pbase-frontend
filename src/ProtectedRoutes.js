import { Route, Navigate } from 'react-router-dom';
import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const ProtectedRoutes = (Component) => {

    const token = cookies.get("TOKEN");

    return token ? <Component /> : <Navigate to="/pages/login/login.jsx" />
}
