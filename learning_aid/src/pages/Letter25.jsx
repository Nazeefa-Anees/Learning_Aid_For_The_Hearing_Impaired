import React from "react";
import backArrow from '../assets/backarrow.png';
import "./Letter.css";


export default function Letter25() {
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
    </div>
  );
}
