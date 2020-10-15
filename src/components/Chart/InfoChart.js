import React from "react";
import Logo from "../card/Logo";

class InfoChart extends React.Component {
  render() {
    return (
      <div className="pb-5 pt-4 hidden-sm ">
        <div>
          <h1>LOW GLYCEMIC AND INSULIN INDEX</h1>
          <Logo />
          <p className=" ml-5 p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum eros ut lorem pharetra, in commodo arcu volutpat. Donec
            blandit ligula in vehicula placerat. Sed fringilla facilisis turpis,
            et congue ipsum porta ac. Nunc a risus lectus. Phasellus gravida
            lobortis pulvinar.
          </p>
        </div>
        <div className="pb-5">
          <img  src={require("../../assets/Vector Smart Object.png")} />
        </div>
      </div>
    );
  }
}
export default InfoChart;
