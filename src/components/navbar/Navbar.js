import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {

  
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <div className="nav p-1">
        <div>
          <i className="fas fa-shopping-cart">Cart</i>{" "}
        </div>
        Contact
        <div>
          <img src={require("../../assets/Logodsa.png")} />
        </div>
        <div>
          <i className="far fa-user">Sign In</i>
          <button
            onClick={() => this.scrollToTop()}
            type="button"
            className="btn btn-md btn-success  ml-5"
          >
            Order Now
          </button>
        </div>
      </div>
    );
  }
}
export default Navbar;
