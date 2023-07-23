import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './icons8-brain-100.png'

function Logo() {
    return (
        <div className='ma3 mt0' style={{ height: '150px', width: '150px'}}>
        <Tilt className='Tilt br2 shadow-2'>
            <div className='pa3'>
                <img style={{paddingTop: '5px'}} src={brain} alt='pic of brain logo'/>
            </div>
        </Tilt>
        </div>
    )
}

export default Logo;