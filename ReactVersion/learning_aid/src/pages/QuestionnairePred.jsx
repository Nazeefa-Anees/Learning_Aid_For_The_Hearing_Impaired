import React from 'react'
import { Link } from 'react-router-dom'

export default function 
() {
  return (
    <div className="bg-[url('./assets/rainbow.png')] bg-cover bg-center min-h-screen">
      <Link to='/home'>
      <button className="font-custom bg-yellow-500 text-4xl rounded-full w-64 absolute mx-auto left-0 right-0 bottom-16 shadow-lg">
        yrs
      </button>
      </Link>
      
    </div>
  )
}
