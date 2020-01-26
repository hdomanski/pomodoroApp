import React from "react";
import "./Button.css";

const Button = ({ children, name, time, handleFn, icon }) => {
  const buttonClass = children === "Add" ? "buttonPlus" : "button";
  const iconClass = children === "Add" ? "iconPlus" : "icon";
  console.log("renderBTN");
  return (
    <button className={buttonClass} onClick={() => handleFn(time, name)}>
      <img className={iconClass} src={icon} alt={children}></img>
    </button>
  );
};

// Myslalem zeby ten <button> zastapic <img>. Wtedy nie byloby chyba takich kombinacji z klasami ale nie wiem czy tak mozna

export default Button;
