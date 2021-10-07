class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      display: String.fromCharCode(160),
      sliderVal: 0.3,
      bank: 0
    };
    this.clearDisplay = this.clearDisplay.bind(this);
  };
  powerBank = () => {
    const power = () => {
      if (this.state.power) {
        return "OFF"
      } else {
        return "ON"
      }
    }
    this.setState ({
      power: !this.state.power,
      display: "Power " + power()
    });
    setTimeout(() => this.clearDisplay(), 1000);
  };
  adjustVolume = (e) => {
    if (this.state.power) {
      this.setState ({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  };
  changeBank = () => {
    if (this.state.bank === 0) {
      this.setState ({
        bank: 1,
        display: "Bank 2"
      });
      setTimeout(() => this.clearDisplay(), 1000);
    } else {
      this.setState ({
        bank: 0,
        display: "Bank 1"
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  };
  reproduceSound = () => {
    return true
  };
  clearDisplay = () => {
    this.setState ({
      display: String.fromCharCode(160)
    });
  };
  render () {
    const bankSwitch = () => {
      if (this.state.power) {
        if (this.state.bank === 0) {
          return {
            left: "2px",
            backgroundColor: "var(--hardBlue)"
          }
        } else {
          return {
            right: "2px",
            backgroundColor: "var(--hardBlue)"
          }
        }
      } else {
        if (this.state.bank === 0) {
          return {
            left: "2px",
            backgroundColor: "var(--softBlue)"
          }
        } else {
          return {
            right: "2px",
            backgroundColor: "var(--softBlue)"
          }
        }
      }
    };
    const powerSwitchPosition = () => {
      if (this.state.power) {
        return {
          right: "2px"
        }
      } else {
        return {
          left: "2px"
        }
      }
    };
    const powerColor = () => {
      if (this.state.power) {
        return {
          backgroundColor: "var(--green)"
        }
      } else {
        return {
          backgroundColor: "var(--red)"
        }
      }
    };
    return (
      <div className="drumMachine">
        <div className="buttonPad">
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            Q
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            W
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            E
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            A
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            S
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            D
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            Z
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            X
          </button>
          <button
            onClick={this.reproduceSound.bind(this)}
            type="button"
            className="button"
          >
            C
          </button>
        </div>
        <div className="settingDiv">
          <div className="switchDiv">
            <h2>Power</h2>
            <div className="switch">
              <button
                style={Object.assign(powerSwitchPosition(), powerColor())}
                className="switchKnob"
                onClick={this.powerBank.bind(this)}></button>
            </div>
            <div className="buttonName">
              <h2>{this.state.display}</h2>
            </div>
            <div className="slider">
              <input
                max="1"
                min="0"
                step="0.01"
                onChange={this.adjustVolume.bind(this)}
                type="range"
                value={this.state.sliderVal} />
            </div>
            <div className="switchDiv">
              <h2>Sounds Bank</h2>
              <div className="switch">
                <button
                  style={bankSwitch()}
                  className="switchKnob"
                  onClick={this.changeBank.bind(this)}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

ReactDOM.render(<App/>, document.getElementById("root"));
