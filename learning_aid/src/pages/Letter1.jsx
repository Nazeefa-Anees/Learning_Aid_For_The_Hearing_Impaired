import React, { useRef, useEffect } from 'react';
import Hands from '@mediapipe/hands';
import backArrow from '../assets/backarrow.png';
import next from '../assets/next.png';
import one from '../assets//dataset_icons/letters/1.jpg';
import homeIcon from'../assets/homeicon.png';
import { Link } from 'react-router-dom';

export default function Letter1() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function setup() {
      const hands = new Hands({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}` });
      await hands.initialize();

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const draw = () => {
        hands.send({ image: video }).then((results) => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          if (results.multiHandLandmarks) {
            for (const landmarks of results.multiHandLandmarks) {
              for (const [index, landmark] of landmarks.entries()) {
                const x = landmark.x * canvas.width;
                const y = landmark.y * canvas.height;
                context.beginPath();
                context.arc(x, y, 5, 0, 2 * Math.PI);
                context.fillStyle = 'blue';
                context.fill();

                if (index > 0) {
                  const prevLandmark = landmarks[index - 1];
                  const prevX = prevLandmark.x * canvas.width;
                  const prevY = prevLandmark.y * canvas.height;
                  context.beginPath();
                  context.moveTo(prevX, prevY);
                  context.lineTo(x, y);
                  context.strokeStyle = 'blue';
                  context.lineWidth = 2;
                  context.stroke();
                }
              }
            }
          }

          requestAnimationFrame(draw);
        });
      };

      draw();
    }

    setup();
  }, []);

  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/learning.svg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <div className="box1">
        <h1 className='font-custom text-9xl text-center mt-8  whitespace-pre-wrap absolute left-16 top-0'>w </h1>
      </div>

      {/* Camera */}
      <div className="box2">
        <video ref={videoRef} autoPlay muted className="w-full h-full object-contain" />
        <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
      </div>

      {/*Image*/}
      <div className="box3">
        <img src={one} alt="Letter1" className="image" />
      </div>

      {/* Back Arrow */}
      <Link to='/letters'>
        <button>
          <div
            className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(${backArrow})`,
              width: '5.5%',
              height: '10%'
            }}
          ></div>
        </button>
      </Link>

      {/* Home Icon */}
      <Link to='/home'>
      <button>
      <div
        className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeIcon})`,
          width: '5.5%',
          height: '10%'
        }}
      ></div>
      </button>
      </Link>

      {/* Next */}
      <Link to='/letter2'>
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
