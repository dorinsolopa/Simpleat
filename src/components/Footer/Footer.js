import React from "react";
import "./PreFooter.css";
const Footer = (props) => {
  return (
    <div className="bgFt pl-5 pt-3 d-flex bd-highlight hidden-sm">
      <div className="p-2 w-100 bd-highlight">
        <div class="d-flex justify-content-start">
          <div className="pr-4">
            <img src={require("../../assets/phone.png")} />
          </div>

          <div className="text-white">
            <a href="tel:+ 123 456-789-000">+ 123 456-789-000</a>
            <br />
            <small>Every day from 8AM-8PM</small>
          </div>
          <div className="pr-4 pl-3">
            <img src={require("../../assets/mail.png")} />
          </div>

          <div className="text-white">
            <a href="mailto:info@simpleat.me">info@simpleat.me</a>
            <br />
            <small>We will respond ASAP</small>
          </div>
        </div>
      </div>
      <div className="p-2 flex-shrink-1 bd-highlight pr-5">
        <form className="d-flex justify-content-end">
          <div class="form-group ">
            <select
              className="form-control form-control-md bg-dark "
              id="exampleFormControlSelect1"
            >
              <option>English</option>
              <option>Russian</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Footer;
