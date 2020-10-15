import React from "react";
import "./PreFooter.css";
const PreFooter = (props) => {
  return (
    <div className="bgPre pb-5 pt-5 hidden-sm">
      <div className="d-flex justify-content-center">
        <div>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="pr-3 pb-3"
              src={require("../../assets/facebook.png")}
            />
          </a>

          <div>
            <p className="text-white">BLOG</p>
          </div>
        </div>
        <div>
          <a href="https://twitter.com/" target="_blank">
            <img className="pr-3 pb-3" src={require("../../assets/tw.png")} />
          </a>

          <div>
            <p className="text-white">FAQ</p>
          </div>
        </div>

        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <img className="pb-3" src={require("../../assets/Inst.png")} />
          </a>

          <div>
            <p className="text-white">LEGAL</p>
          </div>
        </div>
      </div>
      <div className="text-white"> © 2018, Simpleat</div>
    </div>
  );
};
export default PreFooter;
