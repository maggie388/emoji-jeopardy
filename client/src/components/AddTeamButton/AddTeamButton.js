import React from 'react';
import './AddTeamButton.scss';

import addIcon from '../../assets/icons/close-outline.svg';

const AddTeamButton = () => {
    return (
        <div className='add-team-button'>
            <img className='add-team-button__icon' src={addIcon} alt="add team" />
        </div>
    );
};

export default AddTeamButton;