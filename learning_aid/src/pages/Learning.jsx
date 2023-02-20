import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'
import '../learning.css'

export default function Learning() {
    return (
        <div className="relative w-full h-full">
          {/* Background Image */}
          <div className="bg-[url('./assets/learning.png')]absolute w-1440 h-1024 left-0 top-0 bg-cover bg-center"></div>
    
          {/* Alphabet Box */}
          <div className="box bg-yellow-400 rounded-3xl border-black">
          <h1 className='font-custom text-8xl text-center absolute right-8 mt-8 whitespace-pre-wrap break-words'>
            ixy,<br/>fydavsh</h1>
            </div>
    
          {/* Number Box */}
          <div className="box bg-yellow-400 rounded-3xl border-black">
          <h1 className='font-custom text-8xl text-center absolute right-8 mt-8 whitespace-pre-wrap break-words'>
            wxl</h1>
            </div>
    
          {/* Back Arrow */}
          <div className="absolute left-0 right-90.21% top-0 bottom-84.77% bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backArrow})` }}></div>
    
          {/* Home Icon */}
          <div className="absolute w-157 h-162 left-1259 top-24 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${homeIcon})`}}></div>
        </div>
      );
}