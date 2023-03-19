import React, { useRef, useEffect, useState } from "react";


import Webcam from "react-webcam";
import homeIcon from "../assets/homeicon.png";
import next from "../assets/next.png";
import "./Question.css";
import { Link } from "react-router-dom";

export default function Q1() {
  const webcamRef = useRef();
  const canvasRef = useRef();

  const [capturedImage, setCapturedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const handleSendImage = (event) => {
    event.preventDefault();
    if (capturedImage) {
      fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: capturedImage }),
      })
      .then(response => response.json())
      .then(data => setPrediction(data.prediction))
      .catch(error => console.error(error));
    }
  };
  
  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/quiz.jpg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <h1
        className="font-custom text-9xl text-center mt-8 absolute top-40"
        style={{ 
          textAlign: "center", 
          left: 120, 
          top: 40,
        }}
      >
        <br />
        9
        <br />
        fmkajkak
      </h1>

      {/* Camera */}
      <div style={{
  position: "absolute",
  top: "50%",
  left: "65%",
  transform: "translate(-50%, -50%)",
  zIndex: 9,
}}>
  <Webcam
    ref={webcamRef}
    style={{
      width: 640,
      height: 480,
    }}
  />
  <canvas
    ref={canvasRef}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: 640,
      height: 480,
    }}
  />
  {/* Capture and Send Buttons */}
  <div style={{ 
    display: "flex", 
    justifyContent: "space-between", 
    width: "100%",
    marginTop: "1rem",
    fontSize: "50px"
  }}>
    <button 
  onClick={handleCapture} 
  className="font-custom bg-yellow-500 hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded"
>
  .kak
</button>

<button 
  onClick={handleSendImage} 
  className="font-custom bg-yellow-500 hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded"
>
hjkak
</button>
  </div>
</div>

  

      {/* Home Icon */}
      <Link to="/home">
        <button>
          <div
            className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${homeIcon})`,
              width: "5.5%",
              height: "10%",
            }}
          ></div>
        </button>
      </Link>

      {/* Next */}
      <Link to="/Q2">
        <button>
          <div
            className="absolute w-12 h-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${next})`,
              width: "5.5%",

              height: "10%",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          ></div>
        </button>
      </Link>

    </div>
  );
}
