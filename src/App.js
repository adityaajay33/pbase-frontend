import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Portfolios from './pages/portfolios/portfolios';
import Register from "./pages/register/Register";
import NoPage from "./pages/NoPage/noPage";
import Login from "./pages/login/login";
import React, { useState, useEffect } from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/pages/portfolios/portfolios.jsx" element={<Portfolios />} />
          <Route path="/pages/register/Register.jsx" element={<Register />} />
          <Route path="/pages/login/login.jsx" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
