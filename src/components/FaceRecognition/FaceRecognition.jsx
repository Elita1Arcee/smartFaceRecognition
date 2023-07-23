import React from "react";
import './FaceRecognition.css'

function FaceRecognition({ imgUrl }) {

   return (
        <div className="ma center">
            <div className="mt-1">
            <img id="inputImage" alt=" " src={imgUrl} width='400px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition; 