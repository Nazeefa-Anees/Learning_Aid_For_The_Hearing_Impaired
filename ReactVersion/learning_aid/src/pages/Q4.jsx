import React, { useRef, useEffect, useState } from "react";
import homeIcon from'../assets/homeicon.png';
import next from '../assets/next.png';
import back from '../assets/back.png';
import "./Question.css";
import { Link } from 'react-router-dom';

export default function Q4() {
 

  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/quiz.jpg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <h1 className='font-custom text-9xl text-center mt-8 absolute top-40 left-80' style={{ textAlign: 'center' }}> <br/>oa<br/>fmkajkak </h1>

      {/* Camera
      <div className="box2">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="h-full w-full object-cover"
        />
      </div> */}

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
      <Link to="/Q5">
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

      {/* Back */}
      <Link to='/Q3'>
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
