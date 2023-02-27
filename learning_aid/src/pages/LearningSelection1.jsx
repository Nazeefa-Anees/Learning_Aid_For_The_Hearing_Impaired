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
                <Box left={130} top={140} text="w" />
                <Box left={290} top={140} text="w&"/>
                <Box left={450} top={140} text="we"/>
                <Box left={610} top={140} text="b"/>
                <Box left={770} top={140} text="W"/>
                <Box left={930} top={140} text="t"/>
                <Box left={1090} top={140} text="ta"/>
                <Box left={1250} top={140} text="la"/>
                <Box left={1410} top={140} text=".a"/>
                <Box left={130} top={340} text="gs"/>
                <Box left={290} top={340} text="oA"/>
                <Box left={450} top={340} text=";a"/>
                <Box left={610} top={340} text="vs"/>
                <Box left={770} top={340} text="ka"/>
                <Box left={930} top={340} text="ma"/>
                <Box left={1090} top={340} text="ns"/>
                <Box left={1250} top={340} text="us"/>
                <Box left={1410} top={340} text="ha"/>
                <Box left={130} top={540} text="*"/>
                <Box left={290} top={540} text="rA"/>
                <Box left={450} top={540} text=",a"/>
                <Box left={610} top={540} text="js"/>
                <Box left={770} top={540} text="ia"/>
                <Box left={930} top={540} text="ya"/>
                <Box left={1090} top={540} text="!"/>
                <Box left={1250} top={540} text="ps"/>
                <Box left={1410} top={540} text="x"/>
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
