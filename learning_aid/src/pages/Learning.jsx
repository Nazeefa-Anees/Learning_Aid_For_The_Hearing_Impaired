import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'
import '../learning.css'

export default function Learning() {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div className="bg-url absolute w-1440 h-1024 left-0 top-0 bg-cover bg-center" style={{ backgroundImage: `url('./assets/learning.png')` }}>

      </div>

      {/* Alphabet Box */}
      <div className="alphabet-box bg-yellow-400 rounded-3xl border-black absolute top-24 right-8">
        <h1 className='font-custom text-8xl text-center mt-8 whitespace-pre-wrap'>
          ixy,<br/>fydavsh
        </h1>
      </div>

      {/* Number Box */}
      <div className="number-box bg-yellow-400 rounded-3xl border-black absolute top-24 left-8">
        <h1 className='font-custom text-8xl text-center mt-8 whitespace-pre-wrap'>
          wxl
        </h1>
      </div>

       {/* Back Arrow */}
      <div className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backArrow})`, width: '48px', height: '48px' }}></div>

      {/* Home Icon */}
      <div className="absolute w-157 h-162 left-1259 top-24 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${homeIcon})`, backgroundSize: 'cover' }}></div>
    </div>
  );
}
