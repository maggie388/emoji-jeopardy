import './App.css';

import { useState, useEffect } from 'react';
import axios from 'axios';


// COMPONENTS
import GameBoard from './components/GameBoard/GameBoard';

const API_URL = 'http://localhost:8080/game';

function App() {
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        // console.log(response.data);
        setGameData(response.data)
      })
  }, [])

  return (
    <div className="app">
      {/* <GameBoard categories={['songs', 'popular phrases', 'drake songs', 'nba teams', 'countries']} /> */}
    </div>
  );
}

export default App;
