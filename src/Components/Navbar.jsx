import React from 'react'
import { NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-10 p-5 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-[30px] italic text-5xl font-bold cursor-pointer">
          Fashe<span className="text-red-600">.</span>
        </h1>
      </div>

     
      <ul className="flex items-center gap-8">
        {[
          { to: '/', label: 'Home' },
          { to: '/shop', label: 'Shop' },
          { to: '/sale', label: 'Sale' },
          { to: '/features', label: 'Features' },
          { to: '/blog', label: 'Blog' },
          { to: '/about', label: 'About' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `hover:text-amber-500 relative py-1 ${
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
