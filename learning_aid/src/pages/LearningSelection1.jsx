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
                <Box left={400} top={618} />
                <Box left={1050} top={618} />
                <Box left={1690} top={618} />
                <Box left={2320} top={618} />
                <Box left={2970} top={618} />
                <Box left={3580} top={618} />
                <Box left={4190} top={618} />
                <Box left={4800} top={618} />
                <Box left={5400} top={618} />
                <Box left={400} top={1320} />
                <Box left={1050} top={1320} />
                <Box left={1690} top={1320} />
                <Box left={2320} top={1320} />
                <Box left={2970} top={1320} />
                <Box left={3580} top={1320} />
                <Box left={4190} top={1320} />
                <Box left={4800} top={1320} />
                <Box left={5400} top={1320} />
                <Box left={400} top={2000} />
                <Box left={1050} top={2000} />
                <Box left={1690} top={2000} />
                <Box left={2320} top={2000} />
                <Box left={2970} top={2000} />
                <Box left={3580} top={2000} />
                <Box left={4190} top={2000} />
                <Box left={4800} top={2000} />
                <Box left={5400} top={2000} />
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
