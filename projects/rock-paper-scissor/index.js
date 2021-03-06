class Player extends React.Component {
  constructor(props){
    super(props);
    this.buttonStyle = this.buttonStyle.bind(this);
  };
  buttonStyle = (name) => {
    if (name === this.props.play) {
      return ('choice ' + (this.props.playerChoice + 'Active'));
    } else {
      return ('choice ' + this.props.playerChoice);
    }
  };
  render(){
    return(
      <div className={"playerWrapper " + this.props.playerWrapper}>

        <div className="playerTitleDiv">
          <h1 className="playerTitle">{this.props.player}</h1>
        </div>

        <div className={"playerChoices " + this.props.playerChoices}>
          <div className={this.buttonStyle('Rock')}><i class="rotate fas fa-hand-rock"></i></div>
          <div className={this.buttonStyle('Paper')}><i class="rotate fas fa-hand-paper"></i></div>
          <div className={this.buttonStyle('Scissor')}><i class="fas fa-hand-scissors"></i></div>
        </div>

        <div className="playerScore">
          <h2>{this.props.score}</h2>
        </div>
      </div>
    );
  };
};

class User extends React.Component {
  constructor(props){
    super(props);
    this.buttonStyle = this.buttonStyle.bind(this);
  };

  buttonStyle = (name) => {
    if (this.props.play === name) {
      return 'choice userChoiceActive'
    } else {
      return 'choice userChoice'
    }
  };
  render(){
    return(
      <div className="playerWrapper userWrapper">

        <div className="playerTitleDiv">
          <h1 className="playerTitle">USER</h1>
        </div>

        <div className="playerChoices userChoices">
          <div className={this.buttonStyle('Rock')}>
            <i class="rotate fas fa-hand-rock"></i>
            <button
              type="button"
              name="rock"
              value="Rock"
              className="choiceButton"
              onClick={this.props.handleClick}
            ></button>
          </div>
          <div className={this.buttonStyle('Paper')}>
            <i class="rotate fas fa-hand-paper"></i>
            <button
              type="button"
              name="paper"
              value="Paper"
              className="choiceButton"
              onClick={this.props.handleClick}
            ></button>
          </div>
          <div className={this.buttonStyle('Scissor')}>
            <i class="fas fa-hand-scissors"></i>
            <button
              type="button"
              name="scissor"
              value="Scissor"
              className="choiceButton"
              onClick={this.props.handleClick}
            ></button>
          </div>
        </div>

        <div className="playerScore">
          <h2>{this.props.score}</h2>
        </div>
      </div>
    );
  };
};

class Display extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    const oponentPlay = (name) => {
      if (this.props.oponentPlay === name) {
        return 'visible'
      } else {
        return 'invisible'
      }
    };
    const userPlay = (name) => {
      if (this.props.userPlay === name) {
        return 'visible'
      } else {
        return 'invisible'
      }
    };

    return(
      <div className="displayWrapper">

        <div className="filler roundChooser">
          <h4>To the best of:</h4>
          <button
            type="button"
            name="addRound"
            className="roundButton"
            onClick={this.props.addRounds}
          >+</button>
          <h5>{this.props.rounds}</h5>
          <button
            type="button"
            name="substractRound"
            className="roundButton"
            onClick={this.props.substractRounds}
          >-</button>
          <h4>rounds</h4>
        </div>

        <div className="playsDisplay">
          <div className="displayedPlayWrapper">
            <i class={"displayedPlay rotate fas fa-hand-rock " + oponentPlay('Rock')}></i>
            <i class={"displayedPlay rotate fas fa-hand-paper " + oponentPlay('Paper')}></i>
            <i class={"displayedPlay fas fa-hand-scissors " + oponentPlay('Scissor')}></i>
          </div>
          <div className="displayedPlayWrapper">
            <i class={"displayedPlay rotate fas fa-hand-rock " + userPlay('Rock')}></i>
            <i class={"displayedPlay rotate fas fa-hand-paper " + userPlay('Paper')}></i>
            <i class={"displayedPlay fas fa-hand-scissors " + userPlay('Scissor')}></i>
          </div>
        </div>

        <div className="filler instructions">
          <h3>INSTRUCTIONS:</h3>
          <ul className="instructionsList">
            <li>
              Choose the number of the rounds with the selectors in the left of the screen.<br/>
              <span>(Best of 3 rounds wins the first player to reach 2 points, best of 5 the first to 3, etc.)</span>
            </li>
            <li>Select your play at the bottom of the screen, and that&apos;s it! Have fun!</li>
          </ul>
          <h4>Coded by <a href="https://github.com/javim93" target="_blank" className="authorLink">@javim93</a></h4>
        </div>
      </div>
    );
  };
};

class Winner extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="winnerWrapper">
        <h2>{this.props.winner} WON!</h2>
        <button
          type="button"
          name="restart"
          className="restart"
          onClick={this.props.restart}
        >Restart</button>
      </div>
    );
  };
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      play: '',
      counter: '',
      scoreUser: 0,
      scoreOponent: 0,
      rounds: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.addRounds = this.addRounds.bind(this);
    this.substractRounds = this.substractRounds.bind(this);
    this.restart = this.restart.bind(this);
  };

  handleClick = (button) => {
    const plays = ['Rock', 'Paper', 'Scissor'];
    const rng = plays[Math.floor(Math.random() * 3)];
    this.setState ({
      play: button.target.value,
      counter: rng
    });
    if (rng === 'Rock' && button.target.value === 'Paper') {
      this.setState({
        scoreUser: this.state.scoreUser += 1
      });
    } else if (rng === 'Paper' && button.target.value === 'Scissor') {
      this.setState({
        scoreUser: this.state.scoreUser += 1
      });
    } else if (rng === 'Scissor' && button.target.value === 'Rock') {
      this.setState({
        scoreUser: this.state.scoreUser += 1
      });
    } else if (rng === 'Rock' && button.target.value === 'Scissor') {
      this.setState({
        scoreOponent: this.state.scoreOponent += 1
      });
    } else if (rng === 'Paper' && button.target.value === 'Rock') {
      this.setState({
        scoreOponent: this.state.scoreOponent += 1
      });
    } else if (rng === 'Scissor' && button.target.value === 'Paper') {
      this.setState({
        scoreOponent: this.state.scoreOponent += 1
      });
    } else {
      this.setState({
        scoreOponent: this.state.scoreOponent,
        scoreUser: this.state.scoreUser
      });
    };
  };
  addRounds = () => {
    if (this.state.rounds < 9) {
      this.setState ({
        rounds: this.state.rounds += 2
      });
    } else {
      this.setState ({
        rounds: 9
      });
    }
  };
  substractRounds = () => {
    if (this.state.rounds > 1) {
      this.setState ({
        rounds: this.state.rounds -= 2
      });
    } else {
      this.setState ({
        rounds: 1
      });
    }
  };
  restart = () => {
    location.reload();
  };

  render(){
    const victory = Math.floor(this.state.rounds / 2) + 1;
{/*=====================IN CASE THE PLAYER WINS=====================*/}
    if (this.state.scoreUser === victory && this.state.scoreOponent < this.state.scoreUser) {
      return(
        <div className="appWrapper">
          <Player
            score={this.state.scoreOponent}
            play={this.state.counter}
            player="OPONENT"
            playerWrapper="oponentWrapper"
            playerChoices="oponentChoices"
            playerChoice="oponentChoice"
          />
          <Winner
            winner="USER"
            restart={this.restart}
          />
          <Player
            score={this.state.scoreUser}
            play={this.state.play}
            player="USER"
            playerWrapper="userWrapper"
            playerChoices="userChoices"
            playerChoice="userChoice"
          />
        </div>
      );
    } else if (this.state.scoreOponent === victory && this.state.scoreUser < this.state.scoreOponent) {
{/*=====================IN CASE THE OPONENT WINS=====================*/}
      return(
        <div className="appWrapper">
          <Player
            score={this.state.scoreOponent}
            play={this.state.counter}
            player="OPONENT"
            playerWrapper="oponentWrapper"
            playerChoices="oponentChoices"
            playerChoice="oponentChoice"
          />
          <Winner
            winner="OPONENT"
            restart={this.restart}
          />
          <Player
            score={this.state.scoreUser}
            play={this.state.play}
            player="USER"
            playerWrapper="userWrapper"
            playerChoices="userChoices"
            playerChoice="userChoice"
          />
        </div>
      );
    } else {
{/*====================WHILE THE GAME IS RUNNING====================*/}
      return(
        <div className="appWrapper">
          <Player
            score={this.state.scoreOponent}
            play={this.state.counter}
            player="OPONENT"
            playerWrapper="oponentWrapper"
            playerChoices="oponentChoices"
            playerChoice="oponentChoice"
          />
          <Display
            userPlay={this.state.play}
            oponentPlay={this.state.counter}
            rounds={this.state.rounds}
            addRounds={this.addRounds}
            substractRounds={this.substractRounds}
          />
          <User
            score={this.state.scoreUser}
            play={this.state.play}
            handleClick={this.handleClick}
          />
        </div>
      );
    };
  };
};

ReactDOM.render(<App/>, document.getElementById('root'));
