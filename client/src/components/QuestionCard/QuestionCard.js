import { useEffect, useState } from 'react';
import './QuestionCard.scss'

// COMPONENTS
import QuestionModal from '../QuestionModal/QuestionModal';

let count;

const QuestionCard = ({ question, value, questionOpen, setQuestionOpen }) => {
    
    const timeLimit = 5;
    let seconds = timeLimit;
    
    // STATE
    const [isOpen, setIsOpen ] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [timer, setTimer] = useState(seconds);


    const countDown = () => {
        if (seconds > 0) {
            seconds = seconds - 1;
            setTimer(seconds);
        }
    }

    const showQuestion = () => {
        if (!questionOpen) {
            setIsOpen(true);
            setWasClicked(true);
            setQuestionOpen(true);
        }
        count = setInterval(countDown, 1000);
    }

    useEffect(() => {
        if (timer === 0) {
            clearInterval(count);
            setIsOpen(false);
            setQuestionOpen(false);
            seconds = timeLimit;
        }
    }, [timer])

    return (
        <>
        <div className="question-card" onClick={showQuestion}>
            {wasClicked ? "" : `$${value}`}
        </div>
        {isOpen && 
            <QuestionModal 
                question={question}
                timer={timer}
            />}
        </>
    );
};

export default QuestionCard;