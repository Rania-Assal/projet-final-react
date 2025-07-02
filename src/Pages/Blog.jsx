import React from 'react'
import news from '../assets/images/news.jpg'

export default function Blog() {
  return (
    <>
      <div className="relative overflow-hidden group">
        <img
          src={news}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 text-center px-4">
          <h3 className="text-4xl font-bold">NEWS</h3>
        </div>
      </div>

      
    </>
  )
}
