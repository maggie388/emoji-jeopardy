import React from 'react';
import './QuestionModal.scss';

const QuestionModal = ({ question }) => {
    return (
        <div className='question-modal'>
            {question}
        </div>
    );
};

export default QuestionModal;