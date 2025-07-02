import React from 'react'
import black from '../assets/images/black.jpeg'
export default function Features() {
  return (

<>
<div className="relative overflow-hidden group">
        <img
          src={black}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 text-center px-4">
          <h3 className="text-4xl font-bold">FEATURES</h3>
        </div>
      </div>

</>
  )
}
