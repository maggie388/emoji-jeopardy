import { useState } from 'react';
import './QuestionCard.scss'

// COMPONENTS
import QuestionModal from '../QuestionModal/QuestionModal';

const QuestionCard = ({ question, value, questionOpen, setQuestionOpen }) => {
    const [wasClicked, setWasClicked] = useState(false)

    const showQuestion = () => {
        if (!questionOpen) {
            setWasClicked(true);
            setQuestionOpen(true);
        }
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