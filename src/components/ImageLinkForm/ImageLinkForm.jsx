import React from 'react'
import './ImageFormLink.css'

function ImageLinkForm() {
    return (
        <div>
            <p className='f3'>
                {'Smart App to detect faces in your pictures. Give it a try!'}
            </p>
            <div className='ma5 form center br3'>
                <div className='pa5 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green'>Detect</button>
                </div>
            </div>
           
        </div>
    )
}

export default ImageLinkForm;