import React from 'react';
import './QuestionModal.scss';

// ASSETS
import closeIcon from '../../assets/icons/close-outline.svg';
import questionMusic from '../../assets/audio/jeopardy.mp3';
import timesUpMusic from '../../assets/audio/times-up.mp3';

const QuestionModal = ({ question, answer, showAnswer, showAnswerOnClick, timer, closeWindowOnClick, themeAudioRef, timesUpAudioRef }) => {
    return (
        <div className='question-modal'>
            <audio
                ref={timesUpAudioRef}
                src={timesUpMusic}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <img className='question-modal__close' onClick={closeWindowOnClick} src={closeIcon} alt='close window' />
            <p className='question-modal__emoji'>{question}</p>
            <p className='question-modal__timer'>{timer}</p>
            { !showAnswer ?
                <button className='question-modal__button' onClick={showAnswerOnClick}>show answer</button> :
                <p className='question-modal__answer'>{answer}</p>   

            }
        </div>
    );
};

export default QuestionModal;