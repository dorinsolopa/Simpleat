import React from "react";
import "./Card.css";
const Card = (props) => {
  return <div className="bgColor hidden-sm">{props.children}</div>;
};
export default Card;
