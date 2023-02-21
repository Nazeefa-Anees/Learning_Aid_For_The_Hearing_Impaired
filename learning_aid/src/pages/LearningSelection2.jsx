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
                <Box left={629} top={300} />
                <Box left={1032} top={300} />
                <Box left={1435} top={300} />
                <Box left={629} top={618} />
                <Box left={1032} top={618} />
                <Box left={1435} top={618} />
                <Box left={629} top={936} />
                <Box left={1032} top={936} />
                <Box left={1435} top={936} />
            </div>
        </div>
  
        {/* Back Arrow */}
        <div className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${backArrow})`, width: '48px', height: '48px' }}></div>
  
        {/* Home Icon */}
        <div className="absolute w-157 h-162 left-1259 top-24 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${homeIcon})`, backgroundSize: 'cover' }}></div>
      </div>
    );
  
}
