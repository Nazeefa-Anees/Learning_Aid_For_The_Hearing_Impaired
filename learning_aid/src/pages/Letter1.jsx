import React, { useState, useEffect } from "react";
import backArrow from '../assets/backarrow.png';
import next from '../assets/next.png';
import one from '../assets//dataset_icons/letters/1.jpg';
import homeIcon from '../assets/homeicon.png';
import "./Letter.css";
import { Link } from 'react-router-dom';
import HandTracking from '../components/HandTracking';

export default function Letter1() {
  const [showBlur, setShowBlur] = useState(true);

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
          w{' '}
        </h1>
      </div>

      {/* Camera */}
      <div className="box2">
        <HandTracking />
        {showBlur && <div className="blurback"></div>}
        {showBlur && (
          <div className="button">
            <button className="button-text" onClick={() => setShowBlur(false)}>Click to Try</button>
          </div>
        )}
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
              width: '5.5%',
              height: '10%',
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
              width: '5.5%',
              height: '10%',
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
              width: '5.5%',
              height: '10%',
              right: 20,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          ></div>
        </button>
      </Link>
    </div>
  );
}
