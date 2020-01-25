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

  const reveal = async (cellId) => {
    console.log('reveal')
    if(['WON', 'LOST'].indexOf(game.state) > -1 ) return;
    const response = await fetch(`${API_URL}/games/${game.id}/cells/${cellId}/reveal`, {
      method: "post"
    });

    let game2 = await response.json();
    setGame(game2);
  }

  return (
    <div className="App">
      <h1>Minesweeper game</h1>
      <Board game={game} reveal={reveal}/>
      {game && game.state === 'WON' && <h1 style={{color: 'green'}}>You won!</h1>}
      {game && game.state === 'LOST' && <h1 style={{color: 'red'}}>You Lost :(</h1>}
    </div>
  );
}

export default App;
