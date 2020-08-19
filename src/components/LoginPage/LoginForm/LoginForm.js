import React, {useState} from 'react';
import './LoginForm.scss';
import axios from 'axios';
import FormInput from './FormInput/FormInput';
import useAccountChecker from './useAccountChecker';
import {useDispatch} from 'react-redux';
import {storeUserData} from '../../../Redux/actions';
const LoginForm = ()=>{
    const [formValues, setFormValues] = useState({password: '', email: '', username: ''})
    const [loginOrRegister, setLoginOrRegister] = useState('Login');
    const [isValid, response, compareUsernameInDB] = useAccountChecker();
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(loginOrRegister === 'Login')
            axios.post('/login',{...formValues})
            .then(res=>{
                    if(res.data.match){
                        const {_id, groups, username, photo} = res.data;
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
    
    const formHandler = ({target})=>{
        setFormValues({...formValues, [target.name]:target.value});
    }

    const emailHTML = <FormInput name = {'email'} type = {'email'} changeHandler = {formHandler}
                        value = {formValues.email}
                    />;
    
    return(
        <form onSubmit = {submitHandler} className = 'form-box'>
            <div className = 'form-alignment-box'>
                <div className = 'loginOrRegisterBox'>
                    <div 
                        className = {`loginOrRegister ${loginOrRegister === 'Register'?'Register':''}`}
                        onClick = {()=>{loginOrRegister === 'Login' && setLoginOrRegister('Register')}} >
                        Register
                    </div>
                        
                    <div 
                        className = {`loginOrRegister ${loginOrRegister === 'Login'?'Login':''}`} 
                        onClick = {()=>{loginOrRegister === 'Register' && setLoginOrRegister('Login')}}
                    >
                        Login
                    </div>
                </div>
                <ul className = 'inputBox'>
                    <FormInput 
                        name = {'username'} 
                        type = {'text'} 
                        changeHandler = {formHandler} 
                        blurHandler = {compareUsernameInDB}
                        loginOrRegister = {loginOrRegister}
                        username = {formValues.username}
                        value = {formValues.username}
                    />
                    {response}

                    {loginOrRegister === 'Register' && emailHTML}
                    <FormInput name = {'password'} type = {'password'} changeHandler = {formHandler}
                        value = {formValues.password}
                    />
                </ul>
                <button 
                    type = 'submit' 
                    className = 'formButton'
                    disabled = {isValid}
                >
                    Submit
                </button>
            </div>
        </form>
    );
}
export default LoginForm;