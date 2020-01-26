import React from "react";
import "./Timer.css";

const Timer = ({ currentTime, icon, sessionRunning, endSession }) => {
  console.log("render");

  return (
    <div className="timerWrapper">
      {sessionRunning || endSession ? (
        <img className="timerIcon" src={icon} alt="sda"></img>
      ) : null}
      <p className="timer">{` ${Math.floor(currentTime / 60)}:${(currentTime %
        60 <
      10
        ? "0"
        : "") +
        (currentTime % 60)}`}</p>
    </div>
  );
};

export default Timer;
