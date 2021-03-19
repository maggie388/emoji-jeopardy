import { useState } from 'react';
import './Footer.scss';

import AddTeamButton from '../AddTeamButton/AddTeamButton';
import AddTeamForm from '../AddTeamForm/AddTeamForm';
import Team from '../Team/Team';

const Footer = ({ teams, setTeams }) => {
    const [showAddTeamForm, setShowAddTeamForm] = useState(false);

    const toggleAddTeamForm = () => {
        setShowAddTeamForm( showAddTeamForm ? false : true);
    }


    return (
        <footer className='footer'>
            <AddTeamButton toggleAddTeamForm={toggleAddTeamForm} />
            {showAddTeamForm && <AddTeamForm toggleAddTeamForm={toggleAddTeamForm} teams={teams} setTeams={setTeams} />}
            {
                teams.map((t)=> {
                    return <Team key={t.id} name={t.name} score={t.score}/>
                })
            }
        </footer>
    );
};

export default Footer;