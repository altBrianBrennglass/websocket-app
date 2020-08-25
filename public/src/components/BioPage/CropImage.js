import React, {useState, useRef, useEffect} from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import zigzag_logo from '../../assets/zigzag_logo.svg'
import './CropImage.scss';
import {useDispatch} from 'react-redux';
import savePhoto from '../../Redux/actions';


const CropImage = ({image})=>{
    const [imageURL, setImageURL] = useState('');
    const imageElement = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        const cropper = new Cropper(imageElement.current,
        {
            zoomable: true,
            scalable: false,
            aspectRatio: 1,
            crop: ()=>{
                const canvas = cropper.getCroppedCanvas();
                setImageURL(canvas.toDataURL('image/png'));
            }
        });
    },[])
    return(
        <div className = 'CropImage'>
            <div className = 'image-editor'>
                <h1>Your Image</h1>
                <div className = 'img-container'>
                    <img className = 'image' ref = {imageElement} src = {image}/>
                </div>
            </div>
            <div className = 'preview-box'>
                <h1>Preview</h1>
                <img className = 'img-preview' src = {imageURL}/>
            </div>
            <button className = 'ButtonSubmitImage' onClick = {()=>dispatch(savePhoto(imageURL))}>SUBMIT</button>'
        </div>
    )
}

export default CropImage;