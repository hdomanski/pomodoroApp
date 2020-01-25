import React from "react";
import "./Root.css";
import Timer from "../Timer/Timer.js";
import Button from "../Button/Button";

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

  handlePauseTimer = timerId => {
    clearInterval(timerId);
  };

  render() {
    const { currentTime } = this.state;

    return (
      <React.Fragment>
        <Timer currentTime={currentTime} />
        <Button
          time={sessionOption.brake.time}
          name={sessionOption.brake.name}
          handleFn={this.handleStartSession}
        >
          Brake
        </Button>
        <Button
          time={sessionOption.activity.time}
          name={sessionOption.activity.name}
          handleFn={sessionOption.activity.name}
        >
          Work
        </Button>
        <Button timerId={this.time.current}>Pause</Button>
      </React.Fragment>
    );
  }
}

export default Root;
