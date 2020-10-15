import React from "react";
import Logo from "../card/Logo";
import "./BenefitsSimpleat.css";
class BenefitsSimpleat extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className=" pt-5">
        <div>
          <h1>WHY SIMPLEAT</h1>
          <Logo />
          <p>Enjoy all the benefits of Simpleat</p>
        </div>

        <div className="row m-5 ">
          {info.map((item) => {
            return (
              <div className="col-2 ">
                <img className="containerr pb-4" src={item.img} />
                {/* <div className="centered">{item.image}</div> */}
                <h5 className="h5">{item.bold}</h5>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="pt-3 pb-5">
          <button type="submit" className="btn btn-lg btn-success mb-2">
            Order Simpleat
          </button>
        </div>
      </div>
    );
  }
}
export default BenefitsSimpleat;
