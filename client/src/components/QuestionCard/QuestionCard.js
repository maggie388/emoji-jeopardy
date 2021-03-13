import React from 'react';
import './QuestionCard.scss'

const QuestionCard = ({ question }) => {
    return (
        <div className="question-card">
            {question.emoji}
        </div>
    );
};

export default QuestionCard;