import { useState } from "react";

function App() {
  const [playerX, setPlayerX] = useState(true);
  const [moves, setMove] = useState({});

  const calculateWinner = (moves) => {
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let key in winningMoves) {
      const currentData = winningMoves[key];
      const [a, b, c] = currentData;
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return moves[a];
      }
    }
  };

  const winner = calculateWinner(moves);

  const individualMove = (i) => {
    if (!winner && !moves[i]) {
      moves[i] = (playerX && "X") || "O";
      setMove(moves);
      setPlayerX((prev) => !prev);
    }
  };

  const reset = () => {
    setMove({});
    setPlayerX(true);
  };

  return (
    <div className="center">
      <div style={{ marginTop: "50px" }}>
        <button onClick={reset}>Reset</button>
      </div>
      <div>Next Move : {(playerX && "X") || "O"}</div>
      <div>Winner : {winner || "None"}</div>
      <div className="grid">
        {Array(9)
          .fill(null)
          .map((z, i) => {
            return (
              <button key={i} onClick={() => individualMove(i)}>
                {moves[i]}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;
