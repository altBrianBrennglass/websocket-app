import React, {useState} from 'react';
import useMessageGrabber from './useMessageGrabber';
import zigzag_logo from '../../assets/zigzag_logo.svg';
import './Login.scss';

const Login = ()=>{
    const [loginOrRegister, setLoginOrRegister] = useState('Register');
    const [value, setValue] = useState({email: '', username: '', password: ''});
    const changeHandler = ({target})=>{setValue({...value, [target.name]: target.value})};
    const [emailMessage, setEmailMessage] = useMessageGrabber();
    const [usernameMessage, setUsernameMessage] = useMessageGrabber();
    return(
            <div className = 'LoginBox'>
                <div className = 'logoBox'>
                    <img className = 'zigzag_logo' src = {zigzag_logo} alt = 'ZigZag Logo' />
                </div>
                <form className = 'loginBox'>
                    <div className = 'LoginRegisterBox'>
                        <span 
                            onClick = {()=>setLoginOrRegister('Register')}
                            className = {`LoginRegister ${loginOrRegister === 'Register'? 'Register': 'canClick'}`}>
                            Register
                        </span>
                        <span 
                            onClick = {()=>setLoginOrRegister('Login')}
                            className = {`LoginRegister ${loginOrRegister === 'Login'? 'Login': 'canClick'}`}>
                                Login
                        </span>
                    </div>
                    {loginOrRegister === 'Register' &&
                            <div className = 'labelInputBox'>
                                <label className = 'labelBox'>EMAIL</label>
                                    <input
                                        className = 'input'
                                        type = 'email'
                                        value = {value.email}
                                        name = 'email'
                                        id = 'email'
                                        placeholder = 'Ex: something@gmail.com'
                                        onChange = {changeHandler}
                                        onBlur = {({target})=>setEmailMessage(target.name, value.email,loginOrRegister)} 
                                    />
                                <span className = {emailMessage[1]}>{emailMessage[0]}</span>
                            </div>
                    }   
    
                    <div className = 'labelInputBox'>
                        <label className = 'labelBox'>USERNAME</label>
                            <input
                                className = 'input'
                                value = {value.username}
                                name = 'username'
                                id = 'username'
                                placeholder = 'Ex: HaloTop117'
                                onChange = {changeHandler} 
                                onBlur = {({target})=>setUsernameMessage(target.name, value.username,loginOrRegister)}
                            />
                            <span className = {usernameMessage[1]}>{usernameMessage[0]}</span>
                        
                    </div>
    
                    <div className = 'labelInputBox'>
                    
                        <label className = 'labelBox'>PASSWORD</label>
                            <input
                                type = 'password'
                                className = 'input'
                                value = {value.password}
                                name = 'password'
                                id = 'password'
                                placeholder = 'must be at least 8 characters long'
                                onChange = {changeHandler} 
                                minLength = {8}
                            />
                        
                    </div>
                    <div className = 'labelInputBox'>
                        <button className = 'submitButton'>SUBMIT</button>
                    </div>
                </form>
            </div>
    )
}

export default Login;