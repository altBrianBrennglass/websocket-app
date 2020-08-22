import {useState} from 'react';
import axios from 'axios';

const useMessageGrabber = ()=>{
    const [message, setMessage] = useState('');


    const getMessage = async(name, value, registerOrLogin) =>{
        let response;
        const res = await axios.get(`/loginRegisterEvaluate/${name}/?${name}=${value}`);
        console.log(res.data, Object.keys(res.data)[0]);
        if(res.data)
            response = Object.keys(res.data)[0];
        else
            response = 'err'; 
        
        switch(name){
            case('email'):
                if (response === 'err') setMessage(['connection error', 'failure']);
                else if(response) registerOrLogin === 'Login'? setMessage(['email recongized', 'success']) : setMessage(['email taken', 'failure'])
                else registerOrLogin === 'Register'? setMessage(['email available', 'succes']) : setMessage(['email not recognized', 'failure'])
                break;
            case('username'):
                if (response === 'err') setMessage(['connection error', 'failure']);
                else if(response) registerOrLogin === 'Login'? setMessage(['username recongized', 'success']) : setMessage(['username taken', 'failure'])
                else registerOrLogin === 'Register'? setMessage(['username available', 'success']) : setMessage(['username not recognized', 'failure'])
                break;
            default:
                setMessage(['connection error', 'failure']);
                break;
        }
        
    }
    return [message, getMessage];
}

export default useMessageGrabber;