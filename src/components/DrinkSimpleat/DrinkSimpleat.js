import React from "react";
import Logo from "../card/Logo";
import "./DrinkSimpleat.css";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class DrinkSimpleat extends React.Component {
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          By subscribing you will receive 12 buttles of Simpleat mounthly <br />
          You can cancel your subscribing anytime <a href="#">Learn more</a>
        </Popover.Content>
      </Popover>
    );
    return (
      <div className=" margin pt-5 pb-5 hidden-sm">
        <h1>MORE THAN FOOD</h1>
        <Logo />
        <p className="text-center">
          Everything your body needs in one bottle of Simpleat.Drink Simpleat
          and forget about hunger. Be the first to try nutrition designed for
          your needs
        </p>
        <h5>
          <b> Free shipping for orders over €90</b>
        </h5>
        <div class="form-group mr-2">
          <select class="form-control">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>12</option>
            <option>24</option>
            <option>36</option>
            <option>48</option>
            <option>60</option>
            <option>72</option>
            <option>84</option>
            <option>96</option>
            <option>108</option>
            <option>120</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <button className="subscribing ">
            <input className="big-checkbox" type="checkbox" />

            <label className="pl-3">
              <b>One-Time</b> <br />
              Purchase
            </label>
          </button>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <button className="subscribing" active>
              <input className="big-checkbox" type="checkbox" />
              <label className="pl-3">
                <b>Subscribe</b> <br />
                and save 5%
              </label>
            </button>
          </OverlayTrigger>
        </div>
        <div className="d-flex justify-content-between">
          <div className="text-md-left">
            <b>€32</b>
            <p>€2.60 per meal(400kcal)</p>
          </div>
          <div className="pt-3 pb-5">
            <button
              type="button"
              className="btn btn-lg btn-success mb-2 pr-4 pl-4"
            >
              Add to card
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default DrinkSimpleat;
