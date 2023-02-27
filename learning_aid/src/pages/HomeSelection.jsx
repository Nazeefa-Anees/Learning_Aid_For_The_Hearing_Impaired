import React from 'react'
import cloudImage from '../assets/cloud.png';
import { Link } from 'react-router-dom';

export default function HomeSelection() {
  return (


    /*setting the background */
    <div className="bg-[url('./assets/rainbow.png')] bg-cover bg-center min-h-screen">
      <div>


        <h1 className='font-custom text-8xl text-center absolute right-8 mt-8 whitespace-pre-wrap break-words'>wms tlAj <br/> isxy, ix&#123;d NdIdj<br/>bf.k .ksuq</h1>
        </div>



        <div className='flex justify-center'>
        <Link to="/learningCategory"><button className="font-custom text-8xl text-[#203153] bg-cover bg-center w-96 h-96 absolute left-80 mt-48" 
                style={{backgroundImage: `url(${cloudImage})`,backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
          mdvus
        </button>
        </Link>
        </div>

        <div className='flex justify-center'>
        <Link to='/quizCategory'> <button className="font-custom text-8xl text-[#203153] bg-cover bg-center w-96 h-96 absolute right-64 bottom-0" 
                style={{backgroundImage: `url(${cloudImage})`,backgroundSize: "contain",backgroundPosition: "center",backgroundRepeat: "no-repeat",}}>
          m%Yak
        </button>
        </Link>
        </div>
    </div>
  )
  }