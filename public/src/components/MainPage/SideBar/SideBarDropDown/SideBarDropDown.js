import React, {useState} from 'react';
import './SideBarDropDown.scss';

const SideBarDropDown = ({users, room}) =>{
    const [chevronDirection, setChevronDirection] = useState('down');
    return(
        <div className = 'SideBarDropDown'>
            <div className = {`${chevronDirection} nameDisplay`}
                onClick = {()=>chevronDirection === 'down'? setChevronDirection('up'): setChevronDirection('down')}
            >
                <span className = 'roomName'>{room}</span>
                <span 
                    className = 'chevron'
                >
                </span>
            </div>
            <div className = {`userDisplay ${chevronDirection}`}>
                {users.map(value=>
                    <div className = 'user' key = {value.username}>
                        {value.username} <img className = 'userThumbnail' src = {value.photoURL} />
                    </div>)}
            </div>
        </div>
    )
}

export default SideBarDropDown;