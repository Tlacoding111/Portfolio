const players = [
    {
    name: "Tim",
    score: 50,
    id: 1
  },
  {
    name: "Jill",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>

            <Counter score={props.score} />
        </div>
    );
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decremenet"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action incremenet"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initalPlayers.length} 
            />

            {/* Players list */}
            {props.initalPlayers.map( player =>
                <Player 
                    name={player.name} 
                    score={player.score}
                    key={player.id.toString()} 
                />
            )}
        </div>
    );
}

ReactDOM.render(
    <App initalPlayers={players}/>,
    document.getElementById("root")
);