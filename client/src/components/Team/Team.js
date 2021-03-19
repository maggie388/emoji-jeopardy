import { useRef } from 'react';
import './Team.scss';

// ICONS
import addIcon from '../../assets/icons/add-circle-outline.svg';
import subtractIcon from '../../assets/icons/remove-circle-outline.svg';

const Team = ({ team, teams, setTeams }) => {

    const inputRef = useRef();
    
    const updateScore = (operation) => {
        operation === 'add' ? team.score += parseInt(inputRef.current.value) : team.score -= parseInt(inputRef.current.value);
        const copyOfTeams = [...teams];
        copyOfTeams[teams.indexOf(team)] = team;
        setTeams(copyOfTeams);
    }


    return (
        <div className='team'>
            <h4 className='team__name'>{team.name}</h4>
            <p className='team__score'>${team.score}</p>
            <div className='team__change-score'>
                <button className='team__button' onClick={() => updateScore('subtract')}>
                    <img className='team__icon' src={subtractIcon} alt="subtract points" />
                </button>
                <input className='team__input' ref={inputRef} type="number" name='score' step='100' />
                <button className='team__button' onClick={() => updateScore('add')}>
                    <img className='team__icon' src={addIcon} alt="add points" />
                </button>
            </div>
        </div>
    );
};

export default Team;