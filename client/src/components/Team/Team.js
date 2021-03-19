import React from 'react';
import './Team.scss';

// ICONS
import addIcon from '../../assets/icons/add-circle-outline.svg';
import subtractIcon from '../../assets/icons/remove-circle-outline.svg';

const Team = ({name, score}) => {
    return (
        <div className='team'>
            <h4 className='team__name'>{name}</h4>
            <p className='team__score'>${score}</p>
            <div className='team__change-score'>
                <img className='team__icon' src={subtractIcon} alt="subtract points" />
                <input className='team__input' type="number" step='100' />
                <img className='team__icon' src={addIcon} alt="add points" />
            </div>
        </div>
    );
};

export default Team;