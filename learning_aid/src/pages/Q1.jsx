import React, { useRef, useEffect, useState } from "react";
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@mediapipe/hands';
// import '@mediapipe/hands/dist/hands.css';


import Webcam from "react-webcam";
import homeIcon from "../assets/homeicon.png";
import next from "../assets/next.png";
import "./Question.css";
import { Link } from "react-router-dom";

export default function Q1() {
  const webcamRef = useRef();
  const canvasRef = useRef();
  const handsRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    async function loadModel() {
      modelRef.current = await tf.loadLayersModel("../assets/models/model_Numbers/tfjs_model/model.json");
    }

    async function setupHandPose() {
      await handpose.load();
      handsRef.current = new handpose.Hands({
        maxNumHands: 1,
        detectionConfidence: 0.8,
        trackingConfidence: 0.8,
      });
    }

    loadModel();
    setupHandPose();
  }, []);

  useEffect(() => {
    async function startHandPoseEstimation() {
      const video = webcamRef.current.video;
      const canvas = canvasRef.current;
      const hands = handsRef.current;
      const model = modelRef.current;

      if (video && canvas && hands && model) {
        hands.onResults(async (results) => {
          const landmarks = results?.multiHandLandmarks[0];
          if (landmarks) {
            const tensor = tf.tensor(landmarks.flat());
            const prediction = model.predict(tensor.expandDims());
            const gesture = await prediction.argMax().data();

            // Provide feedback to the user based on the gesture prediction
            // ...

            tf.dispose([tensor, prediction]);
          }

          hands.drawConnectors(canvas, results?.multiHandLandmarks[0], handpose.HAND_CONNECTIONS);
          hands.drawLandmarks(canvas, results?.multiHandLandmarks[0], handpose.HAND_CONNECTIONS);
        });

        const canvasContext = canvas.getContext('2d');
        const renderFrame = () => {
          canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
          hands.send({ image: video });
          requestAnimationFrame(renderFrame);
        };

        renderFrame();
      }
    }

    startHandPoseEstimation();
  }, [webcamRef, canvasRef, handsRef, modelRef]);

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

  {/* Notification
  {showNotification && (
        <div className="bg-green-500 text-white py-2 px-4 rounded mt-4">
          Image captured successfully!
        </div>
      )} */}

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
