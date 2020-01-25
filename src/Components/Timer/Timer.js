import React from "react";

const Timer = ({ currentTime }) => {
  console.log("renderTimer");
  return <div>{currentTime}</div>;
};

export default Timer;
