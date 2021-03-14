import { useState } from 'react';
import './QuestionCard.scss'

// COMPONENTS
import QuestionModal from '../QuestionModal/QuestionModal';

const QuestionCard = ({ question, value }) => {
    const [wasClicked, setWasClicked] = useState(false)

    const showQuestion = () => {
        setWasClicked(true);
    }

    return (
        <>
        <div className="question-card" onClick={showQuestion}>
            {wasClicked ? "" : `$${value}`}
        </div>
        {wasClicked && <QuestionModal question={question}/>}
        </>
    );
};

export default QuestionCard;