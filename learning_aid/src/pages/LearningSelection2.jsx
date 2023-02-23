import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'
import Box from '../components/Box'
import './learningSelection.css'

export default function Learning() {
    return (
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div className="bg-[url('./assets/learning.jpg')] bg-cover bg-fixed bg-center h-screen ">
  
        </div>

        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <Box left={1500} top={618} />
                <Box left={2700} top={618} />
                <Box left={3890} top={618} />
                <Box left={1500} top={1320} />
                <Box left={2700} top={1320} />
                <Box left={3890} top={1320} />
                <Box left={1500} top={2000} />
                <Box left={2700} top={2000} />
                <Box left={3890} top={2000} />
            </div>
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
        <div className="absolute w-157 h-162 right-0 top-0 bg-no-repeat bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${homeIcon})`, 
          width: "300px",
          height: "300px", 
          }}
          ></div>
      </div>
    );
  
}
