import React, {useState} from 'react';
import CropImage from './CropImage';
import zigzag_logo from '../../assets/zigzag_logo.svg';
import person_outline from '../../assets/person_outline.svg';
import './BioPage.scss';


const BioPage = ()=>{
    const [bioPageInput, setBioPageInput] = useState('');
    const [buttonState, setButtonState] = useState(false);
    return(
        <div className = 'BioPage'>
            <div className = 'logoBox'>
                <img  className = 'logo' src = {zigzag_logo} alt = 'logo' />
            </div>
            <div className = 'contentBox'>
                <div className = 'photoBox'>
                    <h2 className = 'photoTitle'>Add a Photo</h2>
                    <img className = 'avatarBox' src = {person_outline} alt = 'person outline' />
                    <h5 className = 'uploadMessage'>Upload Photo or Use Link</h5>
                    {/*<div className = 'labelInputBox'>*/}
                       {/*} <div className = 'uploadBox'>
                            <label className = 'uploadFileBox uploadButton' htmlFor = 'uploadFileInput'>Upload From File</label>
                            <input
                                style = {{display: 'none'}}
                                className = 'uploadFileInput'
                                id = 'uploadFileInput'
                                type = 'file'
                            />
                        </div>
                        */} 
                        <label style = {{display: 'none'}} htmlFor = 'uploadURL'>upload URL</label>
                            <div className = 'uploadBox'>
                                <input
                                    className = 'BioPageInput'
                                    name = 'uploadURL'
                                    id = 'uploadURL'
                                    placeholder = 'upload from URL'
                                    value = {bioPageInput}
                                    onChange = {({target})=>setBioPageInput(target.value)}
                                />
                                <button className = 'uploadButton' onClick = {()=>{setButtonState(true); console.log('duck')}}>Upload</button>
                                {buttonState && <CropImage image = {bioPageInput}/>}
                            {/*</div>*/}
                        
                        </div>
                </div>
                <div className = 'BioText'>
                        <p className = 'BioTextBox'>
                        Create your bio. It helps friends and enemies identify you, so they can invite you to their groups
                        </p>
                        <textarea className = 'BioTextarea' />
                </div>
            </div>
            <div className = 'submitButtonBox'>
                <button className = 'ButtonSubmit'>SUBMIT</button>
            </div>
            
        </div>
    )
}

export default BioPage;