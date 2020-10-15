import React from "react";
import First from "./First";
import ImgNutrition from "./ImgNutrition";
import Card from "../card/Card";
import Second from "./Second";
import Logo from "../card/Logo";
import "./Nutritional.css"
class Nutritional extends React.Component {
  render() {
    return (
      <Card>
        <div className="pb-4 pt-5">
          <h1>NUTRITIONAL FACTS</h1>
         <Logo/>
        </div>

        <div className="row">
          <div className="col-4">
            <First />
          </div>
          <div className="col-4">
            <ImgNutrition />
          </div>
          <div className="col-4">
            <Second />
          </div>
        </div>
        <div className="p-4">
          <a
          className="pdf"
            href="https://docs.google.com/document/d/1MgsmpM3tfzb_NK3QSuuaZYjj6cVKBTs9N6zBp28qyjE/edit"
            download
          >
            Download PDF
          </a>
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
export default Nutritional;
