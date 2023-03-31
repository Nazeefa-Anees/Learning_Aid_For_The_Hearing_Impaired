import React, { useEffect, useRef } from "react";
import { Camera } from "@mediapipe/camera_utils";
import { Hands } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";

export default function HandTracking() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.5,
    });
    hands.onResults((results) => {
      if (results.multiHandLandmarks) {
        const canvasElement = canvasRef.current;
        const canvasCtx = canvasElement.getContext("2d");
        canvasCtx.save();
        canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
        canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
        drawConnectors(
          canvasCtx,
          results.multiHandLandmarks[0],
          Hands.HAND_CONNECTIONS,
          { color: "#00FF00", lineWidth: 5 }
        );
        drawLandmarks(
          canvasCtx,
          results.multiHandLandmarks[0],
          { color: "#FF0000", lineWidth: 2 }
        );
        canvasCtx.restore();
      }
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current });
      },

    });
    camera.start();
    return () => {
      camera.stop();
      hands.close();
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="object-contain"
        autoPlay
        muted
        playsInline
        style={{width: "100%", height: "100%", position: "absolute", zIndex: "-1" }}
      />
      <canvas
        ref={canvasRef}
        className="object-contain"
        style={{width: "100%", height: "100%", position: "absolute", zIndex: "1" }}
      />
    </>
  );
}
