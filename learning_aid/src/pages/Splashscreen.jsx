import './splash.css'
import '../App.css'
import * as React from 'react';
import { Link } from 'react-router-dom';


export default function Splashscreen() {
  return (
    <div>
      <button className="font-custom w-96 h-30 p-10 text-5xl bg-yellow-500 rounded-full flex items-center justify-center absolute bottom-10 right-20 shadow-lg">
      
      <Link to="/questionnaire">oeka mgka.ksuq →</Link>
          
      </button>
      
    </div>
  )
}
