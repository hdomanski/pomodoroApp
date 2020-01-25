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
  constructor(props) {
    super(props);
    this.time = React.createRef();
  }

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
    clearInterval(this.time.current);
    this.handleStartTimer();
  };

  handleStartTimer = () => {
    this.time.current = setInterval(() => {
      this.setState({
        timerId: this.time.current
      });
      if (this.state.currentTime === 0) {
        clearInterval(this.time.current);
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
