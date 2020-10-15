import React from "react";
import "./Nutrients.css";
const ImgNutrients = (props) => {
  return (
    <div className="container">
      <img className="imgNutrient" src={require("../../assets/Bottle).png")} />
      <h2 className="centered  text-dark">What's inside ?</h2>
    </div>
  );
};
export default ImgNutrients;
