import React, { useRef, useEffect } from "react";
import backArrow from "../assets/backarrow.png";
import next from "../assets/next.png";
import one from "../assets//dataset_icons/letters/1.jpg";
import homeIcon from "../assets/homeicon.png";
import "./Letter.css";
import { Link } from "react-router-dom";

import { Hands } from "@mediapipe/hands";
import * as tf from "@tensorflow/tfjs";

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
          hands.drawConnectors(context, handLandmarks, Hands.HAND_CONNECTIONS);
          hands.drawLandmarks(context, handLandmarks, Hands.HAND_CONNECTIONS);
      
          const prediction = predictGesture(handLandmarks);
          console.log(prediction);
        });
      });
      
      hands.initialize();
    });
  }, []);

  async function predictGesture(handLandmarks) {
    const model = await tf.loadLayersModel("../assets/models/model_Letters/tfjs_model/model.json");
    const tensor = tf.tensor(handLandmarks);
    const prediction = model.predict(tensor);
    const output = prediction.arraySync()[0];
    return output;
  }  

  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/learning.svg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <div className="box1">
        <h1 className="font-custom text-9xl text-center mt-8  whitespace-pre-wrap absolute left-16 top-0">
          w{" "}
        </h1>
      </div>

      {/* Camera */}
      <div className="box2">
        <video 
          ref={videoRef}
          className="video"
          autoPlay 
          muted
        />
        <canvas
          ref={canvasRef}
          className="canvas"
          width={640}
          height={480}
        />
      </div>

      {/*Image*/}
      <div className="box3">
        <img src={one} alt="Letter1" className="image" />
      </div>

      {/* Back Arrow */}
      <Link to="/letters">
        <button>
          <div
            className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${backArrow})`,
              width: "5.5%",
              height: "10%",
            }}
          ></div>
        </button>
      </Link>

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
      <Link to="/letter2">
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
