import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'
import './learning.css'

export default function Learning() {
    return (
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div className="absolute w-full h-full left-0 top-0 bg-cover bg-center" style={{ backgroundImage: `url('./assets/learning.jpg')` }}>
  
        </div>
  
        {/* Alphabet Box */}
        <div className="alphabet-box">
          <h1 className='alphabet-text font-custom text-8xl text-center mt-8 whitespace-pre-wrap'>
            isxy,<br/>fydavsh
          </h1>
        </div>
  
        {/* Number Box */}
        <div className="number-box">
          <h1 className='number-text font-custom text-8xl text-center mt-8 whitespace-pre-wrap'>
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
