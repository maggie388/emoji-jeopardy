import { useState } from 'react';
import './GameBoard.scss';

import Category from '../Category/Category';

const GameBoard = ({ categories, gameData }) => {
    const [questionOpen, setQuestionOpen] = useState(false);
    return (
        <div className='game-board'>
            {
                categories.map((category, i) => {
                    return (
                        <Category 
                            key={i} 
                            heading={category} 
                            questions={gameData[category]} 
                            questionOpen={questionOpen}
                            setQuestionOpen={setQuestionOpen} 
                        />
                    );
                })
            }
        </div>
    );
};

export default GameBoard;