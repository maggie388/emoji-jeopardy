import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddTeamForm.scss';

import saveIcon from '../../assets/icons/save-outline.svg';

const AddTeamForm = ({ teams, setTeams, toggleAddTeamForm }) => {
    const handleSumbit = (e) => {
        e.preventDefault();
        setTeams([
            { id: uuidv4(), name: e.target.name.value, score: 0 },
            ...teams
        ]);
        toggleAddTeamForm();
    }

    return (
        <form className='add-team-form' onSubmit={handleSumbit}>
            <label className='add-team-form__label' htmlFor='name'>team name:</label>
            <div className='add-team-form__wrapper'>
                <input className='add-team-form__input' type='text' name='name'/>
                <button className='add-team-form__button'>
                    <img className='add-team-form__icon' src={saveIcon} alt="save to add team" />
                </button>
            </div>
        </form>
    );
};

export default AddTeamForm;