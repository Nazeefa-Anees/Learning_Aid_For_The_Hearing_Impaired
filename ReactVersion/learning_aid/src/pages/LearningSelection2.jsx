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
            <Link to='/number0'>
              <button>
              <Box left={360} top={140} text="0"/>
              </button>
            </Link>
            <Link to='/number1'>
              <button>
              <Box left={560} top={140} text="1"/>
              </button>
            </Link>
            <Link to='/number2'>
              <button>
              <Box left={760} top={140} text="2"/>
              </button>
            </Link>
            <Link to='/number3'>
              <button>
              <Box left={960} top={140} text="3"/>
              </button>
            </Link>
            <Link to='/number4'>
              <button>
              <Box left={1160} top={140} text="4"/>
              </button>
            </Link>
            <Link to='/number5'>
              <button>
              <Box left={360} top={500} text="5"/>
              </button>
            </Link>
            <Link to='/number6'>
              <button>
              <Box left={560} top={500} text="6"/>
              </button>
            </Link>
            <Link to='/number7'>
              <button>
              <Box left={760} top={500} text="7"/>
              </button>
            </Link>
            <Link to='/number8'>
              <button>
              <Box left={960} top={500} text="8"/>
              </button>
            </Link>
            <Link to='/number9'>
              <button>
              <Box left={1160} top={500} text="9"/>
              </button>
            </Link>
            </div>
        </div>
  
        {/* Back Arrow */}
      <Link to='/learningCategory'>
      <button>
      <div
        className="absolute w-12 h-12 left-0 top-0 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${backArrow})`,
          width: '5.5%',
          height: '10%'
        }}
      ></div>
      </button>
      </Link>

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
