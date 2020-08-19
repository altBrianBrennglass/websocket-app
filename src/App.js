import React from 'react';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import store from './Redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
       
              <LoginPage />
            
      </div>
    </Provider>
  );
}

export default App;
