import { useEffect, useState, useRef } from 'react';
import './QuestionCard.scss'

// COMPONENTS
import QuestionModal from '../QuestionModal/QuestionModal';

let count;

const QuestionCard = ({ question, answer, value, questionOpen, setQuestionOpen }) => {
    
    const timeLimit = 5;
    let seconds = timeLimit;
    
    // STATE
    const [isOpen, setIsOpen ] = useState(false)
    const [wasClicked, setWasClicked] = useState(false)
    const [timer, setTimer] = useState(seconds);
    const [showAnswer, setShowAnswer] = useState(false);
    const themeAudioRef = useRef();
    const timesUpAudioRef = useRef();


    const countDown = () => {
        if (seconds === 0) seconds = timeLimit;
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
        themeAudioRef.current.pause();
    }

    const closeWindowOnClick = () => {
        clearInterval(count);
        setIsOpen(false);
        setQuestionOpen(false);
    }

    useEffect(() => {
        if (timer === 0) {
            clearInterval(count);
            themeAudioRef.current.pause();
            timesUpAudioRef.current.play();
        }
    }, [timer])

    return (
        <>
        <div className="question-card" onClick={showQuestion}>
            {wasClicked ? "" : `$${value}`}
        </div>
        {isOpen && 
            <QuestionModal 
                themeAudioRef={themeAudioRef}
                timesUpAudioRef={timesUpAudioRef}
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