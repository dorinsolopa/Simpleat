import React from "react";
import Card from "../card/Card";
import TableNutrients from "./TableNutrients";
import { nutrientsData, nutriensTabs } from "../info/Info";
import Tabs from "./Tabs";
import ImgNutrients from "./ImgNutrients";
import Logo from "../card/Logo";

class SuperFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: nutriensTabs[0],
    };
  }

  changeTab = (tab) => {
    this.setState({ activeTab: tab });
    console.log("tab-->", tab);
  };
  render() {
    return (
      <Card>
        <div className="pt-5 hidden-sm">
          <h1>SIMPLEAT -- SUPER FOOD</h1>
          <Logo />
          <p>
            Nutritional Profile. <br />
            Click on the Title to learn more
          </p>
        </div>
        <div className="pt-4">
          <Tabs onChange={this.changeTab} tabs={nutriensTabs} />
        </div>
        <div className="  d-flex justify-content-center ">
          <div className="col-10 bg-white rounded">
            <div className="row">
              <div className="col-6">
             <ImgNutrients/>
              </div>
              <div>
                <TableNutrients
                  nutrients={nutrientsData[this.state.activeTab.key]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 pb-5">
          <button type="submit" className="btn btn-lg btn-success mb-2">
            Order Now
          </button>
        </div>
      </Card>
    );
  }
}
export default SuperFood;
