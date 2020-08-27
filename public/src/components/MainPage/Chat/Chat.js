import React from 'react';
import './Chat.scss';
import MessageBox from './MessageBox/MessageBox';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Chat = ()=>{
    const sampleData = [
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        },
        {
            username: 'Brian',
            message: 'Hi, Derek'
        },
        {
            username: 'Derek',
            message: 'Hi, Brian'
        },
        {
            username: 'Brian',
            message: 'Do you like fish sticks?'
        },
        {
            username: 'pixelBot',
            message: 'I exist to kill. Ha ha'
        }
    ]
        
    
    return(
        <div className = 'Chat'>
            <h1 className = 'chat-title'>
                Group name
            </h1>
            <div className = 'message-box'>
                {sampleData.map((values, i)=><MessageBox key = {i} {...values} />)}
            </div>
            <div className = 'userMessage'>
                <textarea className = 'userTextBox'/>
            </div>
        </div>
    )
}

export default Chat;