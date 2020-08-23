import {USERDATA, LOGGEDIN} from './constants';

const storeUserData = (userData) =>{
    return {
        type: USERDATA,
        userData
    }
}
const logIn = () =>{
    return {
        type: LOGGEDIN
    }
}

export {storeUserData, logIn};