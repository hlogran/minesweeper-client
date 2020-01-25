import React, { useState, useEffect } from "react";
import {API_URL} from './constants';
import Board from './components/Board'
import './App.css';

function App() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}/games`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "rows": 10,
          "cols": 10,
          "bombs": 20
        })
      });

      const game = await response.json();
      setGame(game);
    })();
  }, []);

  return (
    <div className="App">
      <h1>Minesweeper game</h1>
      <Board game={game}/>
    </div>
  );
}

export default App;
