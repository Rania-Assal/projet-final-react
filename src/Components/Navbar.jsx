import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { HiMenu, HiX } from 'react-icons/hi' 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-10 p-5 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-[30px] italic text-5xl font-bold cursor-pointer">
          Fashe<span className="text-red-600">.</span>
        </h1>
      </div>

    
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <HiX /> : <HiMenu />}
      </div>

      <ul className={`flex-col md:flex-row md:flex items-center gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:pt-0 pt-4 md:pb-0 pb-4 md:rounded-none rounded-b-lg shadow-md md:shadow-none transition-all duration-300
        ${isOpen ? 'flex' : 'hidden'}`}
      >
        {[
          { to: '/', label: 'Home' },
          { to: '/shop', label: 'Shop' },
          { to: '/sale', label: 'Sale' },
          { to: '/features', label: 'Features' },
          { to: '/blog', label: 'Blog' },
          { to: '/about', label: 'About' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <li key={to} className="px-4 md:px-0">
            <NavLink
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-amber-500 relative py-1 ${
                  isActive ? 'text-amber-500 font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-amber-500' : ''
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <NavLink
          to="/profile"
          className="flex items-center gap-1 hover:text-amber-500 cursor-pointer text-3xl"
          aria-label="Profile"
        >
          <CgProfile />
        </NavLink>

        <NavLink
          to="/cart"
          className="flex items-center gap-1 hover:text-amber-500 cursor-pointer text-3xl"
        >
          <BsCart3 />
        </NavLink>
      </div>
    </nav>
  )
}
