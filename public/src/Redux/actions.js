import {STOREONREGISTER, SAVEPHOTO} from './constants';


const infoOnRegister = (userData)=>{
    return {
        type: STOREONREGISTER,
        userData
    }
}

const savePhoto = (photoEnc)=>{
    return {
        type: SAVEPHOTO,
        photoEnc
    }
}

export default savePhoto;
export {infoOnRegister};
