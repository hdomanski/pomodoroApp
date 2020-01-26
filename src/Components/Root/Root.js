import React from "react";
import "./Root.css";
import Timer from "../Timer/Timer.js";
import Button from "../Button/Button";
import brainIcon from "../../assets/images/brain.svg";
import coffeeIcon from "../../assets/images/coffee.svg";
import pauseIcon from "../../assets/images/pause.svg";
import plusIcon from "../../assets/images/plus.svg";
import stopIcon from "../../assets/images/stop.svg";
import playIcon from "../../assets/images/play.svg";
import switchBtnIcon from "../../assets/images/switch.svg";

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
    sessionRunning: false,
    endSession: false,
    currentTime: 0
  };

  handleStartSession = (time, name) => {
    this.setState({
      currentTime: time,
      cycle: name,
      endSession: false,
      sessionRunning: true,
      timerRunning: true
    });
    clearInterval(this.time.current);
    this.handleStartTimer();
  };

  handleStartTimer = () => {
    this.time.current = setInterval(() => {
      if (this.state.currentTime === 0) {
        clearInterval(this.time.current);
        this.setState({
          endSession: true,
          sessionRunning: false
        });
      } else {
        this.setState(state => ({
          currentTime: state.currentTime - 1
        }));
      }
    }, 1000);
  };

  handlePlayPauseTimer = time => {
    if (this.state.timerRunning === true) {
      clearInterval(time);
      this.setState({
        timerRunning: false
      });
    } else {
      this.handleStartTimer();
      this.setState({
        timerRunning: true
      });
    }
  };

  handleAddMinute = () => {
    this.setState(state => ({
      currentTime: state.currentTime + 60
    }));
  };

  handleSwitchSession = () => {
    if (this.state.cycle === "activity") {
      this.setState({
        currentTime: 5,
        cycle: "brake"
      });
    } else {
      this.setState({
        currentTime: 10,
        cycle: "activity"
      });
    }
  };

  handleStopSession = () => {
    clearInterval(this.time.current);
    this.setState({
      timerRunning: false,
      cycle: "",
      sessionRunning: false,
      endSession: false,
      currentTime: 0
    });
  };

  render() {
    const {
      currentTime,
      sessionRunning,
      endSession,
      cycle,
      timerRunning
    } = this.state;

    return (
      <React.Fragment>
        <Timer
          currentTime={currentTime}
          sessionRunning={sessionRunning}
          endSession={endSession}
          icon={
            endSession === true || sessionRunning === true
              ? cycle === "activity"
                ? brainIcon
                : coffeeIcon
              : null
          }
        />
        <div className="buttonWrapper">
          {(endSession === false && sessionRunning === false) ||
          (endSession === true && cycle === "brake") ? (
            <Button
              time={sessionOption.activity.time}
              name={sessionOption.activity.name}
              handleFn={this.handleStartSession}
              icon={brainIcon}
            >
              Work
            </Button>
          ) : null}

          {(endSession === false && sessionRunning === false) ||
          (endSession === true && cycle === "activity") ? (
            <Button
              time={sessionOption.brake.time}
              name={sessionOption.brake.name}
              handleFn={this.handleStartSession}
              icon={coffeeIcon}
            >
              Brake
            </Button>
          ) : null}

          {sessionRunning === true ? (
            <React.Fragment>
              <Button
                time={this.time.current}
                handleFn={this.handlePlayPauseTimer}
                icon={timerRunning ? pauseIcon : playIcon}
              >
                Pause
              </Button>
              <Button handleFn={this.handleAddMinute} icon={plusIcon}>
                Add
              </Button>
              <Button handleFn={this.handleSwitchSession} icon={switchBtnIcon}>
                Switch
              </Button>
            </React.Fragment>
          ) : null}

          {sessionRunning === true || endSession === true ? (
            <Button handleFn={this.handleStopSession} icon={stopIcon}>
              Stop
            </Button>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default Root;
