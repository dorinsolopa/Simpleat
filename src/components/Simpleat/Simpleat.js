import React from "react";
import InfoSimpleat from "./InfoSimpleat";
import "./Simpleat.css";
import VideoSimpleat from "./VideoSimpleat";
class Simpleat extends React.Component {
  render() {
    return (
      <div className="bg">
        <div className="row">
          <div className="col-4">
            <InfoSimpleat />
          </div>
          <div className="col-8">
            <VideoSimpleat />
          </div>
        </div>
      </div>
    );
  }
}
export default Simpleat;
