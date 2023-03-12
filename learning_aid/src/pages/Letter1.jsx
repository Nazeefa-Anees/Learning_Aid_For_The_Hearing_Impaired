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
{/*const videoRef = useRef(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error(err);
      }
    };
    enableCamera();
  }, []);*/}
  const videoRef = useRef();
  const canvasRef = useRef();
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const hands = new mp.Hands({
      maxNumHands: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    hands.onResults((results) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (results.multiHandLandmarks && showOverlay) {
        drawConnectors(context, results.multiHandLandmarks[0], mp.HAND_CONNECTIONS);
        drawLandmarks(context, results.multiHandLandmarks[0], { color: "#00FF00", radius: 5 });      
      }
    });
    const camera = new mp.Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current });
      },
      width: 640,
      height: 480,
    });
    camera.start();
    return () => {
      hands.close();
      camera.stop();
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
        {/*<video ref={videoRef} autoPlay muted className="h-full w-full object-cover"/>*/}
        <video ref={videoRef} className="video" />
        <canvas ref={canvasRef} className="canvas" />
      </div>

      {/*Image*/}
      <div className="box3">
        <img src={one} alt="Letter1" className="image" />
      </div>

      <div style={{ width: "5.5%", height: "10%" }}>
        <button onClick={() => setShowOverlay(!showOverlay)}>Toggle Overlay</button>
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
