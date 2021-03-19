import React from 'react';
import './AddTeamButton.scss';

import addIcon from '../../assets/icons/close-outline.svg';

const AddTeamButton = ({ toggleAddTeamForm }) => {
    const handleAddingTeam = () => {
        toggleAddTeamForm();
    }

    return (
        <button className='add-team-button' onClick={handleAddingTeam}>
            <img className='add-team-button__icon' src={addIcon} alt="add team" />
        </button>
    );
};

export default AddTeamButton;