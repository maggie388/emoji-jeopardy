import React from 'react';
import './Footer.scss';

import AddTeamButton from '../AddTeamButton/AddTeamButton';

const Footer = () => {
    return (
        <footer className='footer'>
            <AddTeamButton />
        </footer>
    );
};

export default Footer;