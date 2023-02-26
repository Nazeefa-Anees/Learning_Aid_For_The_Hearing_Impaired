
import '../App.css'
import * as React from 'react';
import { Link } from 'react-router-dom';


export default function Splashscreen() {
  return (
    <div className="bg-[url('./assets/Splashbg.jpg')] bg-cover bg-center min-h-screen ">
      <Link to="/questionnaire">
        <button className="font-custom w-96 h-30 p-10 text-5xl bg-yellow-500 rounded-full flex items-center justify-center absolute bottom-10 right-20 shadow-lg">
      
      oeka mgka.ksuq →
          
      </button>
      </Link>
      
    </div>
  )
}
