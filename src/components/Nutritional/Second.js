import React from "react";

const Second = (props) => {
  return (
    <div className="mr-4">
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-shrink-1 bd-highlight">
          <img src={require("../../assets/Forma 6.png")} />
        </div>

        <div className="p-2 w-100 bd-highlight">
          <h6>Vegan, lactose-free, nut-free</h6>
          <p>Easy to make food descisions</p>
        </div>
      </div>

      <div className="d-flex bd-highlight pl-5">
        <div className="p-2 flex-shrink-1 bd-highlight">
          <img src={require("../../assets/Forma 5.png")} />
        </div>

        <div className="p-2 w-100 bd-highlight">
          <h6>Scientifically approved</h6>
          <p>
            Simpleat is designed in a lab, based on clinical studies and
            produces using the latest high-tech
          </p>
        </div>
      </div>
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-shrink-1 bd-highlight">
          <img src={require("../../assets/Shape 4.png")} />
        </div>

        <div className="p-2 w-100 bd-highlight">
          <h6>Anywhere you go</h6>
          <p>
            1-year shelf life and no refrigeration required.Excellent nutrition
            is always with you
          </p>
        </div>
      </div>
    </div>
  );
};
export default Second;
