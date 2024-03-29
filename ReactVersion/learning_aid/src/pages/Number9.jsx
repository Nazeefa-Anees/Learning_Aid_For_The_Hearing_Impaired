import React, { useRef, useEffect } from "react";

import backArrow from '../assets/backarrow.png';
import number9 from '../assets//dataset_icons/numbers/9.jpg';
import back from '../assets/back.png';
import homeIcon from  '../assets/homeicon.png';
import "./Letter.css";
import { Link } from 'react-router-dom';


export default function Number9() {
  const videoRef = useRef(null);

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
  }, []);

  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/learning.svg)] bg-cover bg-center min-h-screen"></div>

     {/*Text*/}
     <div className="box1">
        <h1 className="font-custom text-8xl text-center mt-8  whitespace-pre-wrap absolute left-0 right-0 top-0">
          9{" "}
        </h1>
      </div>

      {/* Camera */}
      <div className="box2">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="h-full w-full object-cover"
        />
      </div>

      {/*Image*/}
      <div className="box3">
        <img src={number9} alt="Number9" className="image" />
      </div>

      {/* Back Arrow */}
      <Link to='/numbers'>
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
      

      {/* Back */}
      <Link to='/number8'>
        <button>
        <div
        className="absolute w-12 h-12 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${back})`,
          width: "5.5%",
          height: "10%",
          left: 20,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></div>
        </button>
      </Link>

      
    </div>
  );
}
