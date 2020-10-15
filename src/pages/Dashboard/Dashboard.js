import React from "react";
import BenefitsSimpleat from "../../components/BenefitsSimpleat/BenefisSimpleat";
import Navbar from "../../components/navbar/Navbar";
import Simpleat from "../../components/Simpleat/Simpleat";
import { info, ingredients, testimonial } from "../../components/info/Info";
import Orders from "../../components/DrinkSimpleat/Orders";
import Testimonial from "../../components/Testimonial/Testimonial";
import Ingredients from "../../components/Ingredients/Ingredients";
import Nutritional from "../../components/Nutritional/Nutritional";
import InfoChart from "../../components/Chart/InfoChart";
import SuperFood from "../../components/Food/SuperFood";
import JoinUs from "../../components/JoinUs/JoinUS";
import PreFooter from "../../components/Footer/PreFooter";
import Footer from "../../components/Footer/Footer";
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <Navbar />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Orders />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Simpleat />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BenefitsSimpleat info={info} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Testimonial testimonial={testimonial} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Ingredients ingredients={ingredients} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Nutritional />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-9 ">
            <InfoChart />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SuperFood />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <JoinUs />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <PreFooter />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
