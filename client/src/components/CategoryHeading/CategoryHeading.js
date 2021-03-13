import React from 'react';
import './CategoryHeading.scss';

const CategoryHeading = ({ heading }) => {
    return (
        <div className="category-heading">
            <h2>{heading}</h2>
        </div>
    );
};

export default CategoryHeading;