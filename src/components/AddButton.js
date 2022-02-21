import React from 'react';
import { Link } from 'react-router-dom'
import {ReactComponent as AddButtonBut} from '../assets/add.svg'


function AddButton() {
    
    return(
        <Link to="/note/new" className='floating-button'>
            <AddButtonBut />
        </Link>

    )
}

export default AddButton;
