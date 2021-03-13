import React from 'react';
import './Category.scss'

import CategoryHeading from '../CategoryHeading/CategoryHeading';
import QuestionCard from '../QuestionCard/QuestionCard';

const Category = ({ heading, questions }) => {
    return (
        <div className="category">
            <CategoryHeading heading={heading} />
            {
                questions.map((q) => {
                    return <QuestionCard question={q} />
                })
            }
        </div>
    );
};

export default Category;