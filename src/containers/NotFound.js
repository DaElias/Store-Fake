/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PhotoError from "../assets/Error404.jpeg";
import AnimationTxt from "../Components/style/AnimationTxt";
const NotFound = () => {
  return (
    <>
      <AnimationTxt />
      <img
        src={PhotoError}
        style={{
          borderRadius: "20px ",
        }}
      />
    </>
  );
};

export default NotFound;
