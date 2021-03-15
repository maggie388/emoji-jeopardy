import React from 'react';
import './QuestionModal.scss';

import closeIcon from '../../assets/icons/close-outline.svg';

const QuestionModal = ({ question, answer, showAnswer, showAnswerOnClick, timer, closeWindowOnClick }) => {
    return (
        <div className='question-modal'>
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