import {useDispatch} from 'react-redux';
import {storeUserData} from '../../../Redux/actions';

const submitHandler = (e, loginOrRegister) => {
    const dispatch = useDispatch();
    e.preventDefault();
    if(loginOrRegister === 'Login')
        axios.post('/login',{...formValues})
        .then(res=>{
                if(res.data.match){
                    const {_id, groups, username, photoURL} = res.data;
                    dispatch(storeUserData({_id, groups, username, photo}));
                }
                else throw Error('account not recognized');
        })
        .catch(err=>console.log(err));
    else
        axios.post('/Register', formValues)
        .then(res=>{
            const {_id, groups, username, photo} = res.data;
            dispatch(storeUserData({_id, groups, username, photo}));
        })
        .catch(err=>console.log(err));
        setFormValues({username: '', password: '', email: ''})
}

export default submitHandler;