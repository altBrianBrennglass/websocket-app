import React from 'react';
import './MainPage.scss';
import SideBar from './SideBar/SideBar';
import Chat from './Chat/Chat';
const MainPage = ()=>{
    return (
        <div className = 'MainPage'>
            <SideBar />
            <Chat />
        </div>
    )
}

export default MainPage;