import React from "react";

function FaceRecognition({ imgUrl }) {

   return (
        <div className="ma center">
            <div className="mt-1">
            <img alt=" " src={imgUrl} width='500px' height='auto'/>
            </div>
        </div>
    )
}

export default FaceRecognition; 