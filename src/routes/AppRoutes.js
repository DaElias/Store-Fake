import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import NotFound from "../containers/NotFound";
import Success from "../containers/Success";
import Layout from "../Components/Layout";
import { Container } from "react-bootstrap";

const AppRoutes = () => {
  return (
    <Layout>
      <Container style={{paddingTop:"80px", paddingBottom:"80px"}}>
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
      </Container>
    </Layout>
  );
};

export default AppRoutes;
