import React from "react";
import "./Root.css";
import Timer from "../Timer/Timer.js";
import ButtonsWrapper from "../ButtonsWrapper/ButtonWrapper";

const sessionOption = {
  activity: {
    time: 15,
    name: "activity"
  },
  brake: {
    time: 5,
    name: "brake"
  }
};

class Root extends React.Component {
  state = {
    timerRunning: false,
    cycle: "",
    sessionRunning: "",
    endSession: false,
    currentTime: ""
  };

  handleStartSession = (name, time) => {
    this.setState({
      currentTime: time,
      cycle: name
    });

    // this.handleStartTimer();
  };

  handleStartTimer = () => {
    const time = setInterval(() => {
      this.setState({
        timerId: time
      });
      if (this.state.currentTime === 0) {
        // handleEndSession();
        clearInterval(this.state.timerId);
      } else {
        this.setState(state => ({
          currentTime: state.currentTime - 1
        }));
      }
    }, 1000);
  };

  render() {
    const { currentTime } = this.state;

    return (
      <React.Fragment>
        <Timer currentTime={currentTime} />
        <ButtonsWrapper
          sessionOption={sessionOption}
          handleStartSession={this.handleStartSession}
        />
      </React.Fragment>
    );
  }
}

export default Root;
