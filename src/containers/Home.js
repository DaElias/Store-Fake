import React from "react";
import Products from "../Components/Products";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container } from "react-bootstrap";
const Home = () => (
  <>
    <Header />
    <Container>
      <Products  />
    </Container>
    <Footer />
  </>
);

export default Home;
