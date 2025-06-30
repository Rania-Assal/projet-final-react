import React from 'react'
import {Link} from "react-router"




export default function Navbar() {
  return (
    
   <>
   <nav className='fixed top-0 p-7 flex flex-col bg-red-400'>
    <ul className=' flex gap-5 items-center justify-evenly w-full '>
      <h1 className='text-[30px] italic text-5xl font-bold'>Fashe<span className='text-red-600'>.</span></h1>

      <Link to={{ pathname: '/' }}>
          <li>Home</li>
        </Link>

        <Link to={{ pathname: '/About' }}>
          <li>About</li>
        </Link>

        <Link to={{ pathname: '/Shop' }}>
          <li>Shop</li>
        </Link>

         <Link to={{ pathname: '/Features' }}>
          <li>Features</li>
        </Link>

         <Link to={{ pathname: '/Contact' }}>
          <li>Contact</li>
        </Link>

         <Link to={{ pathname: '/Blog' }}>
          <li>Blog</li>
        </Link>

        <Link to={{ pathname: '/Sale' }}>
          <li>Sale</li>
        </Link>
    
    </ul>
   </nav>
   </>
  )
}
