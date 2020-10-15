import React from "react";
import Logo from "../card/Logo";

class Ingredients extends React.Component {
  render() {
    const { ingredients } = this.props;
    return (
      <div className="pt-4 pb-5">
        <div className="pb-4 pt-5">
          <h1>MAIN INGREDIENTS</h1>
          <Logo />
          <p>What is inside Simpleat?</p>
        </div>
        <div className="d-flex justify-content-center  text-center  ">
          {ingredients.map((item) => {
            return (
              <div className="col-2  ">
                <img className="pb-3" style={{ width: "150px" }} src={item.img} />
                <h5>{item.title}</h5>
                <small>{item.text}</small>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Ingredients;
