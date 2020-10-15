import React from "react";
import Logo from "../card/Logo";
import "./Simpleat.css";
const InfoSimpleat = (props) => {
  return (
    <div className="pt-5 pl-5">
      <h3>WHAT IS SIMPLEAT?</h3>
      <div>
        <Logo />
      </div>
      <div >
        <small>
          Simpleat is made to provide the perfectly balanced diet with every
          nutrient your body needs for optimal health.
          <br />
          <br />
          Simpleat will take care of your hungerwhile you have more important
          things to do whenther it is your work, business, travel or simply
          having fun.
        </small>
      </div>
    </div>
  );
};
export default InfoSimpleat;
