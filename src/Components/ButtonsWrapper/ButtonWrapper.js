import React from "react";
import Button from "../Button/Button";

const ButtonWrapper = ({ handleStartSession, sessionOption }) => {
  console.log("buttonWrapper");
  return (
    <React.Fragment>
      <Button
        sessionOption={sessionOption.activity}
        handleFn={handleStartSession}
      >
        {" "}
        Activity
      </Button>
      <Button sessionOption={sessionOption.brake} handleFn={handleStartSession}>
        {" "}
        Brake
      </Button>
    </React.Fragment>
  );
};

export default ButtonWrapper;
