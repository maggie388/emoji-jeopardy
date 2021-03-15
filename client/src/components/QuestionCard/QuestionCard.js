import { useEffect, useState } from 'react';
import './QuestionCard.scss'

// COMPONENTS
import QuestionModal from '../QuestionModal/QuestionModal';

let count;

const QuestionCard = ({ question, answer, value, questionOpen, setQuestionOpen }) => {
    
    const timeLimit = 60;
    let seconds = timeLimit;
    
    // STATE
    const [isOpen, setIsOpen ] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [timer, setTimer] = useState(seconds);
    const [showAnswer, setShowAnswer] = useState(false)


    const countDown = () => {
        if (seconds > 0) {
            seconds = seconds - 1;
            setTimer(seconds);
        }
    }

    const showQuestion = () => {
        if (!questionOpen && !wasClicked) {
            setIsOpen(true);
            setWasClicked(true);
            setQuestionOpen(true);
        }
        count = setInterval(countDown, 1000);
    }

    const showAnswerOnClick = () => {
        setShowAnswer(true);
        clearInterval(count);
    }

    const closeWindowOnClick = () => {
        clearInterval(count);
        setIsOpen(false);
        setQuestionOpen(false);
    }

    useEffect(() => {
        if (timer === 0) {
            clearInterval(count);
            
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
                answer={answer}
                showAnswer={showAnswer}
                showAnswerOnClick={showAnswerOnClick}
                timer={timer}
                closeWindowOnClick={closeWindowOnClick}
            />}
        </>
    );
};

export default QuestionCard;