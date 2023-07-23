import React from "react";
import './FaceRecognition.css'

function FaceRecognition({ imgUrl, box }) {

   return (
        <div className="ma center holder">
            <div className="absolute mt-1">
            <img id="inputImage" alt=" " src={imgUrl} width='400px' height='auto'/>
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition; 