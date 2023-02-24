import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'

import './learning.css'

export default function Learning() {
    return (
      <div>
        {/* Background Image */}
        <div className="bg-[url('./assets/learning.jpg')]  bg-cover bg-center min-h-screen">
  
        </div>
  
        {/* Alphabet Box */}
        <div className="alphabet-box">
          <h1 className='alphabet-text font-custom text-8xl text-center mt-8  whitespace-pre-wrap absolute left-10 top-10'>
            isxy,<br/>fydavsh
          </h1>
        </div>
  
        {/* Number Box */}
        <div className="number-box">
          <h1 className='number-text font-custom text-8xl text-center mt-8 whitespace-pre-wrap absolute left-32 top-16'>
            wxl
          </h1>
        </div>
  
        {/* Back Arrow */}
        <div className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: "300px",
          height: "300px",
        }}
      ></div>
  
        {/* Home Icon */}
        <div className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${homeIcon})`, 
          width: "300px",
          height: "300px", 
          }}
          ></div>
      </div>
    );
  
}
