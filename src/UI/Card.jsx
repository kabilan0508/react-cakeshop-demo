import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const totalClasses = `${props.className} ${classes.card}`;
  return <div className={totalClasses}>{props.children}</div>;
};

export default Card;
