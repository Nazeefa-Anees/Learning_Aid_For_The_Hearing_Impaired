import React, { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import backArrow from '../assets/backarrow.png';
import homeIcon from'../assets/homeicon.png';
import next from '../assets/next.png';
import "./Question.css";

export default function Q1() {
  const videoRef = useRef(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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
      <div className="bg-[url(./assets/quiz.jpg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <h1 className='font-custom text-9xl text-center mt-8 absolute top-40 left-80' style={{ textAlign: 'center' }}>2 <br/>fmkajkak </h1>

      {/* Camera */}
      <div className="box2">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="h-full w-full object-cover"
        />
      </div>

      {/* Back Arrow */}
      <Link to='/Quiz'>
        <button>
        <div className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: "5.5%",
          height: "10%",
        }}
      ></div>
        </button>
      </Link>
      

      {/* Home Icon */}
      <Link to='/HomeSelection'>
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
      <Link to='/Q2'>
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
