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

  const predictGesture = async (handLandmarks) => {
    const model = await tf.loadLayersModel("../assets/models/model_Numbers/tfjs_model/model.json");
    const tensor = tf.tensor(handLandmarks);
    const prediction = model.predict(tensor);
    const output = prediction.arraySync()[0];
    return output;
  };

  useEffect(() => {
    const runHandpose = async () => {
      const net = new handpose.HandPose({
        locateFile: (path) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${path}`;
        },
      });

      await net.initialize();

      const camera = new Webcam(webcamRef.current.video, {
        width: 640,
        height: 480,
      });

      camera.start();

      const canvas = canvasRef.current;
      canvas.width = 640;
      canvas.height = 480;

      const ctx = canvas.getContext("2d");

      const drawHands = async () => {
        const predictions = await net.estimateHands(camera.video);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#00FF00";
        ctx.fillStyle = "#FF0000";
        ctx.lineWidth = 2;

        if (predictions.length > 0) {
          const prediction = predictions[0];

          for (let i = 0; i < prediction.landmarks.length; i++) {
            const [x, y, z] = prediction.landmarks[i];

            ctx.beginPath();
            ctx.arc(x * canvas.width, y * canvas.height, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
          }
        }

        requestAnimationFrame(drawHands);
      };

      drawHands();
    };

    runHandpose();
  }, []);

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
