import React from 'react';
import './GameBoard.scss';

import Category from '../Category/Category';

const GameBoard = ({ categories, gameData }) => {
    return (
        <div className='game-board'>
            {
                categories.map((category, i) => {
                    return <Category key={i} heading={category} questions={gameData[category]} />;
                })
            }
        </div>
    );
};

export default GameBoard;