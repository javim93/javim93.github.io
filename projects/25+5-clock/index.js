class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      running: false,
      sessionLength: "25",
      breakLength: "5",
      minutes: "25",
      seconds: "00",
      stage: 'Session'
    };
    this.audio = React.createRef();
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    if (this.state.seconds === "00" && this.state.minutes > 10) {
      this.setState ({
        minutes: this.state.minutes -= 1,
        seconds: 59
      });
    } else if (this.state.seconds === "00" && this.state.minutes <= 10) {
      if (this.state.minutes === "00" && this.state.stage === "Session") {
        if (this.state.breakLength > 10) {
          this.setState ({
            minutes: this.state.breakLength,
            seconds: "00",
            stage: "Break"
          });
        } else {
          this.setState ({
            minutes: "0" + this.state.breakLength,
            seconds: "00",
            stage: "Break"
          });
        }
        this.audio.current.play()
      } else if (this.state.minutes === "00" && this.state.stage ==="Break") {
        if (this.state.sessionLength > 10) {
          this.setState ({
            minutes: this.state.sessionLength,
            seconds: "00",
            stage: "Session"
          });
        } else {
          this.setState ({
            minutes: "0" + this.state.sessionLength,
            seconds: "00",
            stage: "Session"
          });
        }
        this.audio.current.play()
      } else {
        this.setState ({
          minutes: "0" + (this.state.minutes - 1),
          seconds: 59
        });
      }
    } else if (this.state.seconds <= 10) {
      this.setState ({
        seconds: "0" + (this.state.seconds - 1)
      });
    } else {
      this.setState ({
        seconds: this.state.seconds -= 1
      });
    }
  };
  handleStartStop = () => {
    if (this.state.running) {
      clearInterval(this.timerID)
      this.setState ({
        running: false
      });
    } else {
      this.timerID = setInterval (() => this.tick(), 1000)
      this.setState ({
        running: true
      });
    }
  };
  handleSessionLength = (e) => {
    if (this.state.sessionLength < "60" && e.target.value === "add" && !this.state.running)  {
      this.setState ({
        sessionLength: (parseInt(this.state.sessionLength) + 1),
        minutes: (parseInt(this.state.minutes) + 1)
      });
    } else if (this.state.sessionLength > "01" && e.target.value === "rest" && !this.state.running) {
      if (this.state.sessionLength > 10) {
        this.setState ({
          sessionLength: (parseInt(this.state.sessionLength) - 1),
          minutes: (parseInt(this.state.minutes) - 1)
        });
      } else {
        this.setState ({
          sessionLength: (parseInt(this.state.sessionLength) - 1),
          minutes: "0" + (parseInt(this.state.minutes) - 1).toString()
        });
      }
    }
  };
  handleBreakLength = (e) => {
    if (this.state.breakLength < "60" && e.target.value === "add" && !this.state.running) {
      this.setState ({
        breakLength: (parseInt(this.state.breakLength) + 1),
      });
    } else if (this.state.breakLength > "01" && e.target.value ==="rest" && !this.state.running) {
      if (this.state.breakLength > 10) {
        this.setState ({
          breakLength: (parseInt(this.state.breakLength) - 1),
        });
      } else {
        this.setState ({
          breakLength: (parseInt(this.state.breakLength) - 1)
        });
      }
    }
  };
  resetTimer = () => {
    this.setState ({
      running: false,
      sessionLength: "25",
      breakLength: "05",
      minutes: "25",
      seconds: "00",
      stage: "Session"
    });
    clearInterval(this.timerID);
    this.audio.current.pause();
    this.audio.current.currentTime = 0;
  };

  render() {
    return (
      <div className="appWrapper">

        <div className="timeLength">
          <div className="lengthDiv">
            <h2>Break Length</h2>
            <div className="timeButtons">
              <button
                onClick={this.handleBreakLength.bind(this)}
                type="button"
                name="button"
                value="rest"
                className="lengthButton">-
              </button>
              <h3>{this.state.breakLength}</h3>
              <button
                onClick={this.handleBreakLength.bind(this)}
                type="button"
                name="button"
                value="add"
                className="lengthButton">+
              </button>
            </div>
          </div>
          <div className="lengthDiv">
            <h2>Session Length</h2>
            <div className="timeButtons">
              <button
                onClick={this.handleSessionLength.bind(this)}
                type="button"
                name="button"
                value="rest"
                className="lengthButton">-
              </button>
              <h3>{this.state.sessionLength}</h3>
              <button
                onClick={this.handleSessionLength.bind(this)}
                type="button"
                name="button"
                value="add"
                className="lengthButton">+
              </button>
            </div>
          </div>
        </div>

        <div className="session">
          <h2>{this.state.stage}</h2>
          <h3>{this.state.minutes}:{this.state.seconds}</h3>
          <audio ref={this.audio} id="beep" src="beep.mp3"></audio>
        </div>

        <div className="actionButtons">
          <button
            type="button"
            name="button"
            onClick={this.handleStartStop.bind(this)}>Play/Pause
          </button>
          <button
            onClick={this.resetTimer.bind(this)}
            type="button"
            name="button">Reset
          </button>
        </div>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById("root"));
