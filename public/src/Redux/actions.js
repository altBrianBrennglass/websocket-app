import {STOREONREGISTER} from './constants';


const infoOnRegister = (userData)=>{
    return {
        type: STOREONREGISTER,
        userData
    }
}

export {infoOnRegister};