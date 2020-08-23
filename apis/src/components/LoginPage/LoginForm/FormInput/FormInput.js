import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({name, type, changeHandler, blurHandler, loginOrRegister, username})=>{
     return(
        <li>
            <label htmlFor = {name} className = 'labelBox'>
                {name.toUpperCase()}
                <input
                    className = 'formInput'
                    id = {name}
                    name = {name}
                    type = {type}
                    placeholder = {name}
                    onChange = {changeHandler}
                    onBlur = {()=>blurHandler(loginOrRegister, username)}
                />
            </label>
        </li>
    )
}
FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    blurHandler: PropTypes.func
}

FormInput.defaultProps = {
    blurHandler: ()=>{}
}
export default FormInput;