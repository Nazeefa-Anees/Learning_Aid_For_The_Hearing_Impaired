import React from "react";
import backArrow from '../assets/backarrow.png';
import number0 from '../assets/dataset_icons/numbers/0.jpg';
import homeIcon from'../assets/homeicon.png';
import next from '../assets/next.png';
import "./Letter.css";
import { Link } from 'react-router-dom';

export default function Number0() {
  return (
    <div className="page-container">
      {/* Background Image */}
      <div className="bg-[url(./assets/learning.svg)] bg-cover bg-center min-h-screen"></div>

      {/*Text*/}
      <div className="box1">
        <h1 className='font-custom text-9xl text-center mt-8  whitespace-pre-wrap absolute left-20 top-3'>0 </h1>
      </div>

      {/* Camera */}
      <div className="box2">

      </div>

      {/*Image*/}
      <div className="box3">
        <img src={number0} alt="number0" className="image" />
      </div>

      {/* Back Arrow */}
      <Link to='/learningCategory'>
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
    </div>
  );
}
