import React, {useState} from 'react';
import axios from 'axios';

const useAccountChecker= (username)=>{
    const [isValid, setIsValid] = useState(true);
    const [response, setResponse] = useState(null);

    const createWarningOrSuccess = (res, loginOrRegister)=>{
        const match = res.match || res.login;
        if(loginOrRegister === 'Register'){
            if(match){
                setResponse(<span className = 'badMatch match'>The Username exists</span>)
                setIsValid(true);
            }
            else{
                setResponse(<span className = 'goodMatch match'>The Username is available</span>)
                setIsValid(false);
            }
        }
        else{//login
            if(match){
                setResponse(<span className = 'goodMatch match'>The Username exists</span>)
                setIsValid(false);
            }
            else{
                setResponse(<span className = 'badMatch match'>The Username is unrecognized</span>)
                setIsValid(true);
            }
        }
    } 

    const compareUsernameInDB = (loginOrRegister, username)=>{
        if(!loginOrRegister) throw Error('did not provide appropriate parameters to compareUsernameInDB');
        //console.log(loginOrRegister, username);
        if(loginOrRegister === 'Login')
            axios.get(`login/?username=${username}`)
                .then(res=> createWarningOrSuccess(res.data, loginOrRegister))
                .catch(err=>console.log(err, 'milk'));
        else    
            axios.get(`:8080/register/?username=${username}`)
                .then(res=> createWarningOrSuccess(res.data, loginOrRegister))
                .catch(err=>console.log(err, 'milk'));
    }
    return [isValid, response, compareUsernameInDB];
}

export default useAccountChecker;

/*
const usernameBlurHandler = ()=>{
        const createWarningOrSuccess = (res)=>{
            console.log(res);
            const match = res.login || res.match;
            if(loginOrRegister === 'Register'){
                if(match){
                    setUsernameBlur(<span className = 'badMatch match'>The Username exists</span>)
                    setDisable(true);
                }
                else{
                    setUsernameBlur(<span className = 'goodMatch match'>The Username is available</span>)
                    setDisable(false);
                }
            }
            else{//login
                if(match){
                    setUsernameBlur(<span className = 'goodMatch match'>The Username exists</span>)
                    setDisable(false);
                }
                else{
                    setUsernameBlur(<span className = 'badMatch match'>The Username is unrecognized</span>)
                    setDisable(true);
                }
            }
        }

        if(loginOrRegister === 'Login')
            axios.get(`/login/?username=${formValues.username}`)
                .then(res=> createWarningOrSuccess(res.data))
                .catch(err=>console.log(err));
        else    
            axios.get(`/register/?username=${formValues.username}`)
                .then(res=> createWarningOrSuccess(res.data))
                .catch(err=>console.log(err));
        

    }
    */