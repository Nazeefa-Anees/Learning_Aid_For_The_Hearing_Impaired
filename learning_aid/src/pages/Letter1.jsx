import React, { useRef, useEffect, useState } from "react";
import backArrow from "../assets/backarrow.png";
import next from "../assets/next.png";
import one from "../assets//dataset_icons/letters/1.jpg";
import homeIcon from "../assets/homeicon.png";
import "./Letter.css";
import { Link } from "react-router-dom";

import * as mp from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

export default function Letter1() {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const hands = new mp.Hands({ maxNumHands: 1 });
    hands.setOptions({
      staticImageMode: false,
      maxNumHands: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    hands.onResults((results) => {
      if (results.multiHandLandmarks) {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawConnectors(context, results.multiHandLandmarks[0], mp.HAND_CONNECTIONS, {
          color: "#00FF00",
          lineWidth: 5,
        });
        drawLandmarks(context, results.multiHandLandmarks[0], {
          color: "#FF0000",
          lineWidth: 2,
        });
      }
    });

    const enableCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      hands.setInputVideo(videoRef.current);
      hands.start();
    };
    enableCamera();

    return () => {
      hands.close();
    };
  }, []);

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
          autoPlay
          muted
          className="video"
          playsInline
        />
        <canvas ref={canvasRef} className="canvas" />
        {showOverlay && <div className="overlay" />}
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