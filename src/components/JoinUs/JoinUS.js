import React from "react";
import Logo from "../card/Logo";

class JoinUs extends React.Component {
  render() {
    return (
      <div>
        <div className="pt-5">
          <h1>JOIN US</h1>
          <Logo />
          <p>Stay updated, enjoy special offers and bonuses</p>
        </div>

        <form className="form-inline d-flex justify-content-center pt-3 pb-5">
          <div className="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" className="sr-only">
              Password
            </label>
            <input
              type="email"
              size="50"
              className="form-control form-control-lg"
              id="inputEmail"
              placeholder="Your e-mail"
            />
          </div>
          <button type="submit" className="btn btn-lg btn-success mb-2">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
export default JoinUs;
