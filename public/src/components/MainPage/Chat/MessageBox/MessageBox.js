import React from 'react';
import {useSelector} from 'react-redux';
import './MessageBox.scss';


const MessageBox = ({message, username})=>{
    console.log(username, message, 'milk');
    let theUser = useSelector(state=>state.userData.username);
    console.log('duck', theUser);
    if(theUser === username) theUser = 'You';
    return(
        <div className = {`MessageBox ${theUser === 'You'?'You': ''}`}>
            <div className = 'user'>
                {username}
            </div>
            <div className = 'the-message'>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default MessageBox;