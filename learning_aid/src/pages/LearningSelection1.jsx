import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'
import Box from '../components/Box'
import './learningSelection.css'

export default function Learning() {
    return (
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div className="bg-[url('./assets/quiz.jpg')] bg-cover bg-fixed bg-center h-screen ">
  
        </div>

        <div className="container mx-auto">
            <div className="flex flex-wrap">
                <Box left={80} top={140} />
                <Box left={230} top={140} />
                <Box left={390} top={140} />
                <Box left={550} top={140} />
                <Box left={710} top={140} />
                <Box left={870} top={140} />
                <Box left={1030} top={140} />
                <Box left={1190} top={140} />
                <Box left={1350} top={140} />
                <Box left={80} top={340} />
                <Box left={230} top={340} />
                <Box left={390} top={340} />
                <Box left={550} top={340} />
                <Box left={710} top={340} />
                <Box left={870} top={340} />
                <Box left={1030} top={340} />
                <Box left={1190} top={340} />
                <Box left={1350} top={340} />
                <Box left={80} top={540} />
                <Box left={230} top={540} />
                <Box left={390} top={540} />
                <Box left={550} top={540} />
                <Box left={710} top={540} />
                <Box left={870} top={540} />
                <Box left={1030} top={540} />
                <Box left={1190} top={540} />
                <Box left={1350} top={540} />
            </div>
        </div>
  
        {/* Back Arrow */}
      <div
        className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: '5.5%',
          height: '10%'
        }}
      ></div>

      {/* Home Icon */}
      <div
        className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeIcon})`,
          width: '5.5%',
          height: '10%'
        }}
      ></div>
      </div>
    );
  
}
