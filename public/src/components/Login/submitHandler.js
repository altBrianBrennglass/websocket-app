import axios from 'axios';
import {infoOnRegister} from '../../Redux/actions'
import {useDispatch} from 'react-redux';

const submitHandler = (loginOrRegister, email, username, password)=>{
    const dispatch = useDispatch();
    if(loginOrRegister === 'Register'){
        axios.post('/Register',{ username, email, password })
        .then(res=>dispatch(infoOnRegister(res.data)))
        .catch(err=>console.log(err))
    }
    else{
        //Deals with Login
    }
}

export default submitHandler;