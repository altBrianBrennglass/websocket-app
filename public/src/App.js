import React from 'react';
import Login from './components/Login/Login';
import BioPage from './components/BioPage/BioPage';
import CropImage from './components/BioPage/CropImage'
import './App.scss';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import store from './Redux/store';
import MainPage from './components/MainPage/MainPage';
import {useSelector} from 'react-redux';

const App = ()=>{
    return(
        <Provider store = {store}>
            <div className = 'App'>
                <Router>
                    <Switch>
                        <Route exact path = '/' component = {Login} />
                        <Route path = '/BioPage' component = {BioPage} />
                        <Route path = '/CropImage' component = {CropImage} />
                        <Route path = '/MainPage' component = {MainPage} />
                    </Switch>
                </Router>
             </div>
        </Provider>
    )
}

export default App;