import React from "react";

const Button = ({ children, sessionOption, handleFn }) => {
  const name = sessionOption.name;
  const time = sessionOption.time;
  console.log("renderbutton");
  return <button onClick={() => handleFn(name, time)}>{children}</button>;
};

export default Button;
