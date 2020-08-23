import {useState} from 'react';
import axios from 'axios';

const useMessageGrabber = ()=>{
    const [message, setMessage] = useState('');


    const getMessage = async(name, value, registerOrLogin) =>{
        let response;
        try{
            const res = await axios.get(`/loginRegisterEvaluate/${name}/?${name}=${value}`);
            response = Object.values(res.data)[0];
        }
        catch{
            return setMessage(['connection error', 'failure']);
        }
        switch(name){
            case('email'):
                if(response) registerOrLogin === 'Login'? setMessage(['email recongized', 'success']) : setMessage(['email taken', 'failure'])
                else registerOrLogin === 'Register'? setMessage(['email available', 'succes']) : setMessage(['email not recognized', 'failure'])
                break;
            case('username'):
                if(response) registerOrLogin === 'Login'? setMessage(['username recongized', 'success']) : setMessage(['username taken', 'failure'])
                else registerOrLogin === 'Register'? setMessage(['username available', 'success']) : setMessage(['username not recognized', 'failure'])
                break;
            default:
                setMessage(['connection error', 'failure']);
                break;
        }
        
    }

    const toggleMessage = (registerOrLogin)=>{
        if(message[0] !== '' && message[0] !== 'connection error'){
            if(registerOrLogin === 'Login'){
                if(message[0] === 'username taken')setMessage(['username recognized', 'failure'])
                else setMessage(['username not recongized', 'success'])
            }
            else{
                if(message[0] === 'username recongized')setMessage(['username taken', 'failure'])
                else setMessage(['username available', 'success'])
            }
        }
    }

    return [message, getMessage, toggleMessage];
}

export default useMessageGrabber;