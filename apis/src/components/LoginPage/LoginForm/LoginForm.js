import React, {useState} from 'react';
import './LoginForm.scss';
import axios from 'axios';
import FormInput from './FormInput/FormInput';
import useAccountChecker from './useAccountChecker';
import submitHandler from './submitHandler';

const LoginForm = ()=>{
    const [formValues, setFormValues] = useState({password: '', email: '', username: ''})
    const [loginOrRegister, setLoginOrRegister] = useState('Login');
    const [isValid, response, compareUsernameInDB] = useAccountChecker();
    const dispatch = useDispatch();
    
    
    const formHandler = ({target})=>{
        setFormValues({...formValues, [target.name]:target.value});
    }

    const emailHTML = <FormInput name = {'email'} type = {'email'} changeHandler = {formHandler}
                        value = {formValues.email}
                    />;
    
    return(
        <form onSubmit = {(e)=>submitHandler(e, loginOrRegister)} className = 'form-box'>
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