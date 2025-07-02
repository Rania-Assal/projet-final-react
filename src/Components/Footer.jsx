import React from 'react'
import { FaFacebookF } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaSquarePinterest } from "react-icons/fa6"
import { FaGooglePlusG } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className='mt-20 bg-gray-200 flex flex-col justify-center'>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6 py-10 max-w-7xl mx-auto text-gray-700'> 
        
        <div>
          <h1 className='font-bold mb-4'>Get in Touch</h1>
          <p className='text-sm mb-4'>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className='flex gap-4 text-xl text-gray-500'>
            <FaFacebookF className='hover:text-amber-500 cursor-pointer' />
            <FaXTwitter className='hover:text-amber-500 cursor-pointer' />
            <FaSquarePinterest className='hover:text-amber-500 cursor-pointer' />
            <FaGooglePlusG className='hover:text-amber-500 cursor-pointer' />
            <FaInstagram className='hover:text-amber-500 cursor-pointer' />
          </div>
        </div>

        
        <div>
          <p className='font-bold mb-4'>CATEGORIES</p>
          {['Men', 'Women', 'Dresses', 'Sunglasses'].map((item, i) => (
            <p key={i} className='text-sm mb-2 hover:text-amber-500 cursor-pointer'>{item}</p>
          ))}
        </div>

       
        <div>
          <p className='font-bold mb-4'>LINKS</p>
          {['Search', 'About Us', 'Contact Us', 'Returns'].map((item, i) => (
            <p key={i} className='text-sm mb-2 hover:text-amber-500 cursor-pointer'>{item}</p>
          ))}
        </div>

        <div>
          <p className='font-bold mb-4'>HELP</p>
          {['Track Order', 'Returns', 'Shipping', 'FAQs'].map((item, i) => (
            <p key={i} className='text-sm mb-2 hover:text-amber-500 cursor-pointer'>{item}</p>
          ))}
        </div>

      
        <div className='flex flex-col gap-3'>
          <p className='font-bold mb-2'>NEWSLETTER</p>
          <input
            className='border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400'
            type="email"
            placeholder='Email Address'
            name='contact[email]'
            id='subscribe_email'
            required
            aria-label='Email address'
            autoCorrect='off'
            autoCapitalize='off'
          />
          <button className='bg-black text-white rounded-3xl py-3 hover:bg-amber-700 transition'>
            Subscribe
          </button>
        </div>
      </div>

   
      <div className='py-4 mt-10 text-center text-xs text-gray-600'>
        <p>
          &copy; Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.
        </p>
      </div>
    </footer>
  )
}
