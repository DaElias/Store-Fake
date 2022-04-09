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
      <div className="padding-top padding-bottom">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            justifyItems: "center",
          }}
        >
          <AnimationTxt />
          <img
            src={PhotoError}
            style={{
              borderRadius: "20px ",
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
