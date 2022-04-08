/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PhotoError from "../assets/Error404.jpeg";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import AnimationTxt from "../styles/AnimationTxt";
const NotFound = () => {
  return (
    <>
      <Header />
      <div className="padding-top">
        <AnimationTxt />
        <img
          src={PhotoError}
          style={{
            borderRadius: "20px ",
          }}
        />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
