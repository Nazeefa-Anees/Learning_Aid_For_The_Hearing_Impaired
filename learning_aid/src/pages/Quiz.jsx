import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'

import './learning.css'

export default function Quiz() {
  return (
    <div>
      {/* Background Image */}
      <div
        className="bg-[url('./assets/quiz.jpg')] bg-cover bg-center min-h-screen"
      ></div>

      <Link to="/home">
        <button className="font-custom w-96 h-30 p-10 text-5xl bg-yellow-500 rounded-full flex items-center justify-center absolute bottom-10 right-20 shadow-lg">
          oeka mgka.ksuq →
        </button>
      </Link>

      {/* Back Arrow */}
      <div
        className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: '5.5%',
          height: '10%',
        }}
      ></div>

      {/* Home Icon */}
      <div
        className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeIcon})`,
          width: '5.5%',
          height: '10%',
        }}
      ></div>
    </div>
  );
}
