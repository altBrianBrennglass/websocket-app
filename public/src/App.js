import React from 'react';
import Login from './components/Login/Login';
import './App.scss';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from './Redux/store';

const App = ()=>
    <Provider store = {store}>
        <div className = 'App'>
            <Login />
        </div>
    </Provider>


export default App;
