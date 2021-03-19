import './App.scss';

import { useState, useEffect } from 'react';
import axios from 'axios';


// COMPONENTS
import Header from './components/Header/Header';
import GameBoard from './components/GameBoard/GameBoard';
import Footer from './components/Footer/Footer';

const API_URL = 'http://localhost:8080/game';

function App() {
  const [gameData, setGameData] = useState({});
  const [teams, setTeams] = useState([]);

  /* * * * * * * * * * * * * *
  teams = [
    {id: '123', name: 'team1', score: 0},
    {id: '456', name: 'team2', score: 0}
  ]
  * * * * * * * * * * * * * */

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
      <Header />
      <GameBoard categories={categories} gameData={gameData} />
      <Footer teams={teams} setTeams={setTeams} />
    </div>
  );
}

export default App;
