import React from 'react';
import './GameBoard.scss';

import Category from '../Category/Category';

const GameBoard = ({ categories }) => {
    return (
        <div className='game-board'>
            {
                categories.map((category) => {
                    return <Category heading={category} />;
                })
            }
        </div>
    );
};

export default GameBoard;