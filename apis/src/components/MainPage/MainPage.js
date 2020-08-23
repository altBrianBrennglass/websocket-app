import React from 'react';
import './MainPage.scss';
import Search from './Search/Search';
import Groups from './Groups/Groups';
import Dialog from './Dialog/Dialog';

const MainPage = ()=>{
    
    return (
        <main className = 'MainPage'>
            <Search />
            <Groups />
            <Dialog />
        </main>
    )
}

export default MainPage;