import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContex from "../context/AppContex";
import useInitialState from "../hooks/useInitialState";
import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import NotFound from "../containers/NotFound";
import Success from "../containers/Success";

const AppRoutes = () => {
  const initialState = useInitialState();
  return (
    <AppContex.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/information" element={<Information />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/checkout/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </AppContex.Provider>
  );
};

export default AppRoutes;
