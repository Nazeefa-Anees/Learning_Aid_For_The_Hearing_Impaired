import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@mediapipe/hands";
// import '@mediapipe/hands/dist/hands.css';
import Webcam from "react-webcam";
import homeIcon from "../assets/homeicon.png";
import next from "../assets/next.png";
import "./Question.css";
import { Link } from "react-router-dom";

const handConnections = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [0, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [0, 13],
  [13, 14],
  [14, 15],
  [15, 16],
  [0, 17],
  [17, 18],
  [18, 19],
  [19, 20],
];

export default function Letter1() {
  const hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    },
  });

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      video.srcObject = stream;

      hands.setOptions({
        maxNumHands: 1,
        minDetectionConfidence: 0.8,
        minTrackingConfidence: 0.5,
      });

      hands.onResults((results) => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        results.multiHandLandmarks.forEach((handLandmarks) => {
          for (let i = 0; i < handConnections.length; i++) {
            const [start, end] = handConnections[i];
            const startX = handLandmarks[start].x * canvas.width;
            const startY = handLandmarks[start].y * canvas.height;
            const endX = handLandmarks[end].x * canvas.width;
            const endY = handLandmarks[end].y * canvas.height;
            context.beginPath();
            context.moveTo(startX, startY);
            context.lineTo(endX, endY);
            context.lineWidth = 2;
            context.strokeStyle = "green";
            context.stroke();
          }

          hands.drawLandmarks(context, handLandmarks, Hands.HAND_CONNECTIONS);

          const prediction = predictGesture(handLandmarks);
          console.log(prediction);
        });
      });

      hands.initialize();
    });
  }, []);

  async function predictGesture(handLandmarks) {
    const model = await tf.loadLayersModel(
      "../assets/models/model_Letters/tfjs_model/model.json"
    );
    const tensor = tf.tensor(handLandmarks);
    const prediction = model.predict(tensor);
    const output = prediction.arraySync()[0];
    return output;
  }

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
    
      <Webcam
        audio={false}
        ref={webcamRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          zIndex: 9,
          width: 640,
          height: 480,
          marginLeft: "auto",
          marginRight: 0,
        }}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "72%",
          transform: "translate(-50%, -50%)",
          zIndex: 9,
          width: 640,
          height: 480,
          marginLeft: "auto",
          marginRight: 0,
        }}
      />
  

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
