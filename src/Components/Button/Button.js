import React from "react";

const Button = ({ children, name, time, handleFn, timerId }) => {
  console.log("renderbutton");
  return <button onClick={() => handleFn(name, time)}>{children}</button>;
};

export default Button;
