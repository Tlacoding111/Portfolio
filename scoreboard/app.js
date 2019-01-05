const Header = (props) => {
    return (
        <header>
            <Stats players={props.players} />
            <h1>{props.title}</h1>
        </header>
    );
}

const Stats = (props) => {
  
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  
  return (
  <table className="stats">
  <tbody>
    <tr>
      <td>Players:</td>
      <td>{totalPlayers}</td>
    </tr>
    <tr>
      <td>Total Points:</td>
      <td>{totalPoints}</td>
    </tr>
  </tbody>
</table>
  );
}

class AddPlayerForm extends React.Component {
  
  state = {
    value: ""
  };

  handleValueChange = (e) => {
    this.setState({value: e.target.value});
  }
 
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value: ""});
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            value={this.state.value}
            onChange={this.handleValueChange}
            placeholder="Enter a player's name" 
          />
        
          <input 
             type="submit"
             value="Add Player"
          />
      </form>
    );
  }
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
            {props.name}
            </span>

            <Counter 
              score={props.score}
              index={props.index}
              changeScore={props.changeScore}
            />
        </div>
    );
}

const Counter = (props) => {

    let index = props.index;
  
      return (
          <div className="counter">
              <button className="counter-action decremenet" onClick={() => props.changeScore(index, -1)}> - </button>
              <span className="counter-score">{props.score}</span>
              <button className="counter-action incremenet" onClick={() => props.changeScore(index, 1)}> + </button>
          </div>
      );
}

class App extends React.Component {
    
    state = {
        players: [
            {
                name: "Tim",
                score: 0,
                id: 1
              },
              {
                name: "Madison",
                score: 0,
                id: 2
              },
              {
                name: "Ashley",
                score: 0,
                id: 3
              },
              {
                name: "James",
                score: 0,
                id: 4
              }
        ]
    };

    // player id counter
    prevPlayerId = 4;

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
    }
    
    handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1,
        }
      ]
    });
  }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
            players: prevState.players.filter(p => p.id !== id)
            }; 
        })
    }
    
    render() {
        return (
            <div className="scoreboard">
                <Header 
                    title="Scoreboard" 
                    players={this.state.players} 
                />
    
                {/* Players list */}
                {this.state.players.map( (player, index) =>
                    <Player 
                        name={player.name} 
                        score={player.score}
                        id={player.id}
                        key={player.id.toString()} 
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
              <AddPlayerForm addPlayer={this.handleAddPlayer}/>
            </div>
        );   
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);