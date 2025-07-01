import React from 'react'
import { Link } from "react-router"




export default function Navbar() {
  return (

    <>
      <nav className=' z-10 fixed top-0 p-7 flex flex-col bg-white w-full shadow-lg'>
        <ul className='flex items-center justify-center gap-7 '>
          <h1 className='text-[30px] italic text-5xl font-bold'>Fashe<span className='text-red-600'>.</span></h1>

          <Link className='hover:text-amber-500' to={{ pathname: '/' }}>
            <li>Home</li>
          </Link>

          <Link className='hover:text-amber-500' to={{ pathname: '/Shop' }}>
            <li>Shop</li>
          </Link>

          <Link className='hover:text-amber-500' to={{ pathname: '/Sale' }}>
            <li>Sale</li>
          </Link>

          <Link className='hover:text-amber-500' to={{ pathname: '/Features' }}>
            <li>Features</li>
          </Link>

          <Link className='hover:text-amber-500' to={{ pathname: '/Blog' }}>
            <li>Blog</li>
          </Link>

          <Link className='hover:text-amber-500' to={{ pathname: '/About' }}>
            <li>About</li>
          </Link>

          <Link className='hover:text-amber-500' to={{ pathname: '/Contact' }}>
            <li>Contact</li>
          </Link>

        </ul>
      </nav>
    </>
  )
}
