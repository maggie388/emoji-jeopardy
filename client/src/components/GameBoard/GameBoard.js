import { useState } from 'react';
import './GameBoard.scss';

import Category from '../Category/Category';

const GameBoard = ({ categories, gameData }) => {
    const [questionOpen, setQuestionOpen] = useState(false);
    return (
        <main className='game-board'>
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
        </main>
    );
};

export default GameBoard;