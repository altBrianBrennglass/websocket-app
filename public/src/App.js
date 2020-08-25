import React from 'react';
//import Login from './components/Login/Login';
//import BioPage from './components/BioPage/BioPage';
//import CropImage from './components/BioPage/CropImage'
import './App.scss';
import {Provider} from 'react-redux';
//import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './Redux/store';
import MainPage from './components/MainPage/MainPage';

const App = ()=>
    <Provider store = {store}>
        <div className = 'App'>
            {/*<BioPage />*/}
            {/*<Login />*/}
            <MainPage />
        </div>
    </Provider>


export default App;
