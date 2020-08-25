import React, {useState} from 'react';
import testData from './testData';
import './SideBar.scss';
import SideBarDropDown from './SideBarDropDown/SideBarDropDown';

const SideBar = ()=>{
 
    const [hamburgerDisplay, setHamburgerDisplay] = useState('close');
    return(
        <div className = 'SideBar'>
            <div className = {`hamburgerBox ${hamburgerDisplay}`} onClick = {()=>hamburgerDisplay === 'open'? setHamburgerDisplay('close'): setHamburgerDisplay('open')}>
                <div className = 'hamburger'></div>
            </div>
            <div className = 'group-container'>
                <div className = 'create-group-button-box'>
                    <button className = 'create-group-button' >Create Group</button>
                </div>
                <div className = 'group-display'>
                    {testData.map((value)=><SideBarDropDown {...value}/>)}
                </div>
            </div>
        </div>
    )
}

export default SideBar;