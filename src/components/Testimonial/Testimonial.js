import React from "react";
import Card from "../card/Card";
import "./Testimonial.css";

class Testimonial extends React.Component {
  render() {
    const { testimonial } = this.props;
    return (
      <Card>
        <div className="pt-5">
          <h1>TESTIMONIAL</h1>
          <img src={require("../../assets/Shape-4.png")} />
          <p>
            Simpleat is made to provide the perfectly balanced diet with every
            rutrient your body needs for optimal health
          </p>
        </div>
        <div className="row ml-5 mr-5 pt-4 pb-5">
          {testimonial.map((item) => {
            return (
              <div className="col-3 container">
                <img className="imgStyle" src={item.img} />
                <div class="bottom-left">
                  
                    <b> {item.name}</b><br/>
                  
                  <small>{item.info}</small>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    );
  }
}
export default Testimonial;
