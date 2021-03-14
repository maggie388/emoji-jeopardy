import React from 'react';
import './QuestionModal.scss';

const QuestionModal = ({ question, timer }) => {
    return (
        <div className='question-modal'>
            <p>{question}</p>
            <p>{timer}</p>
        </div>
    );
};

export default QuestionModal;