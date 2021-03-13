import './App.scss';

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
        setGameData(response.data)
      })
  }, [])

  const categories = Object.keys(gameData);
  if (categories.length === 0) {
    return <p>Loading...</p>; 
  }

  return (
    <div className="app">
      <GameBoard categories={categories} gameData={gameData} />
    </div>
  );
}

export default App;