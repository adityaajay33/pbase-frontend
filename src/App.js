import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Portfolios from './pages/portfolios/portfolios';
import Register from "./pages/register/Register";
import NoPage from "./pages/NoPage/noPage";
import Login from "./pages/login/login";
import React, { useState, useEffect } from "react";
import UserHome from "./pages/userHome/UserHome";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Cookies from "universal-cookie";
import ViewPortfolio from "./pages/viewPortfolio/viewPortfolio";

const cookies = new Cookies();

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pages/portfolios/portfolios.jsx" element={<Portfolios />} />
        <Route path="/pages/register/Register.jsx" element={<Register />} />s
        <Route path="/pages/login/login.jsx" element={<Login />} />
        <Route path="/pages/userHome/UserHome.jsx" element={<ProtectedRoutes Component={UserHome} />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/pages/viewPortfolio/viewPortfolio.jsx" element={<ViewPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
