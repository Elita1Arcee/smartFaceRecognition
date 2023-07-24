
import './ImageFormLink.css'

function ImageLinkForm({ onInputChange, onBtnSubmit }) {


    return (
        <div>
            <p className='f3'>
                {'Smart App to detect faces in your pictures. Give it a try!'}
            </p>
            <div className='ma3 form center br3'>
                <div className='pa5 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} placeholder='Enter URL or website of image'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-green' onClick={onBtnSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;