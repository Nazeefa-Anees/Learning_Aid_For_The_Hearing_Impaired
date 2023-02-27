import React from 'react'
import backArrow from '../assets/backarrow.png'
import homeIcon from '../assets/homeicon.png'
import Box from '../components/Box'
import './learningSelection.css'
import { Link } from 'react-router-dom';

export default function Learning() {
    return (
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div className="bg-[url('./assets/learning.svg')] bg-cover bg-fixed bg-center h-screen ">
  
        </div>

        <div className="container mx-auto">
            <div className="flex flex-wrap">
              <Link to='/letter1'>
                <button><Box left={130} top={140} text="w" /></button>
              </Link>
              <Link to='/letter2'>
                <button><Box left={290} top={140} text="w&"/></button>
              </Link>
              <Link to='/letter3'>
                <button><Box left={450} top={140} text="we"/></button>
              </Link>
              <Link to='/letter4'>
                <button><Box left={610} top={140} text="b"/></button>
              </Link>
              <Link to='/letter5'>
                <button><Box left={770} top={140} text="W"/></button>
              </Link>
              <Link to='/letter6'>
                <button><Box left={930} top={140} text="t"/></button>
              </Link>
              <Link to='/letter7'>
                <button><Box left={1090} top={140} text="ta"/></button>
              </Link>
              <Link to='/letter8'>
                <button><Box left={1250} top={140} text="la"/></button>
              </Link>
              <Link to='/letter9'>
                <button><Box left={1410} top={140} text=".a"/></button>
              </Link>
              <Link to='/letter10'>
                <button><Box left={130} top={340} text="gs"/></button>
              </Link>
              <Link to='/letter11'>
                <button><Box left={290} top={340} text="oA"/></button>
              </Link>
              <Link to='/letter12'>
                <button><Box left={450} top={340} text=";a"/></button>
              </Link>
              <Link to='/letter13'>
                <button><Box left={610} top={340} text="vs"/></button>
              </Link>
              <Link to='/letter14'>
                <button><Box left={770} top={340} text="ka"/></button>
              </Link>
              <Link to='/letter15'>
                <button><Box left={930} top={340} text="ma"/></button>
              </Link>
              <Link to='/letter16'>
                <button><Box left={1090} top={340} text="ns"/></button>
              </Link>
              <Link to='/letter17'>
                <button><Box left={1250} top={340} text="us"/></button>
              </Link>
              <Link to='/letter18'>
                <button><Box left={1410} top={340} text="ha"/></button>
              </Link>
              <Link to='/letter19'>
                <button><Box left={130} top={540} text="*"/></button>
              </Link>
              <Link to='/letter20'>
                <button><Box left={290} top={540} text="rA"/></button>
              </Link>
              <Link to='/letter21'>
                <button><Box left={450} top={540} text=",a"/></button>
              </Link>
              <Link to='/letter22'>
                <button><Box left={610} top={540} text="js"/></button>
              </Link>
              <Link to='/letter23'>
                <button><Box left={770} top={540} text="ia"/></button>
              </Link>
              <Link to='/letter24'>
                <button><Box left={930} top={540} text="ya"/></button>
              </Link>
              <Link to='/letter26'>
                <button><Box left={1090} top={540} text="ps"/></button>
              </Link>
              <Link to='/letter25'>
                <button><Box left={1250} top={540} text="!"/></button>
              </Link>
              
              <Link to='/letter27'>
                <button><Box left={1410} top={540} text="x"/></button>
              </Link>
        
              
              
              
              
              
              
              
              
             
              
              

              
                
                
                
                
                
                
              
                
                
                
                
                
                
            </div>
        </div>
  
        {/* Back Arrow */}
        <div>
      <Link to='/learningCategory'>
      <button
        className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: '5.5%',
          height: '10%'
        }}>hi

       </button>

      </Link>
      </div>
      
      

      {/* Home Icon */}
      <Link to='/home'>
      <button>
      <div
        className="absolute w-12 h-12 right-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeIcon})`,
          width: '5.5%',
          height: '10%'
        }}
      ></div>
      </button>
      </Link>
      </div>




    );
  
}
