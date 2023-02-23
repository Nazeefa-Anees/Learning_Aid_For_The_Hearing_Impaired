import React from "react";
import backArrow from '../assets/backarrow.png';
import "./Letter.css";


export default function Number3() {
  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/learning.jpg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <div className="box1">
        <h1 className='alphabet-text font-custom text-8xl text-center mt-8  whitespace-pre-wrap absolute left-10 top-10'>w </h1>
      </div>

      {/* Camera */}
      <div className="box2">

      </div>

      {/*Image*/}
      <div className="box3">
      </div>

      {/* Back Arrow */}
      <div
        className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: "300px",
          height: "300px",
        }}
      ></div>

      {/* Next */}
      <div
        className="absolute w-12 h-12 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${next})`,
          width: "300px",
          height: "300px",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></div>

      {/* Back */}
      <div
        className="absolute w-12 h-12 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${back})`,
          width: "300px",
          height: "300px",
          left: 50,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      ></div>
    </div>
  );
}
