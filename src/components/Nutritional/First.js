import React from "react";

const First = (props) => {
  return (
    <div className="ml-5">
      <div className="d-flex bd-highlight">
        <div className="p-2 w-100 bd-highlight">
          <h6>Energy</h6>
          <p>400 kcal in one bottle <br/>
          20% of your daily needs</p>
        </div>
        <div className="p-2 flex-shrink-1 bd-highlight">
          <img src={require("../../assets/Forma-1.png")} />
        </div>
      </div>

      <div className="d-flex bd-highlight pr-5">
        <div className="p-2 w-100 bd-highlight">
          <h6>Nutrients</h6>
          <p>25 micronutrients <br/>
         20% of your daily requirements in eact bottle</p>
        </div>
        <div className="p-2 flex-shrink-1 bd-highlight">
          <img src={require("../../assets/Forma-2.png")} />
        </div>
      </div>
      <div className="d-flex bd-highlight">
        <div className="p-2 w-100 bd-highlight">
          <h6>Neutral pleasant taste</h6>
          <p>
            Enjoy Simpleat's neutral taste several times a day and never get
            tired
          </p>
        </div>
        <div className="p-2 flex-shrink-1 bd-highlight">
          <img src={require("../../assets/Forma-3.png")} />
        </div>
      </div>
    </div>
  );
};
export default First;
