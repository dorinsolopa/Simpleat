import React from "react";
import DrinkSimpleat from "./DrinkSimpleat";
import ImagesSimpleat from "./ImagesSimpleat";

class Orders extends React.Component {
  render() {
    return (
      <div className="row">
        <div className=" col-xs-12 col-sm-12  col-md-6 col-lg-6">
          <ImagesSimpleat />
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-5">
          <DrinkSimpleat />
        </div>
      </div>
    );
  }
}
export default Orders;
