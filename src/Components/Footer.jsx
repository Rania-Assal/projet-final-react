import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function Footer() {
  return (
    <>
      <footer className='mt-20 bg-gray-200 flex flex-col justify-center '>
        <div className='grid grid-cols-5 p-7 pt-10 pl-50 gap-25 items-center'>
          <div>
            <h1 className='font-bold p-5'>Get in Touch</h1>
            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
            <div className='flex gap-4 p-4'>
              < FaFacebookF className='text-gray-500 hover:text-amber-500' />
              <FaXTwitter className='text-gray-500 hover:text-amber-500' />
              <FaSquarePinterest className='text-gray-500 hover:text-amber-500' />
              <FaGooglePlusG className='text-gray-500 hover:text-amber-500' />
              <FaInstagram className='text-gray-500 hover:text-amber-500' />
            </div>
          </div>

          <div>
            <p className='font-bold' >CATEGORIES</p>
            <p className='text-gray-500 hover:text-amber-500'>Men</p>
            <p className='text-gray-500 hover:text-amber-500'>Women</p>
            <p className='text-gray-500 hover:text-amber-500'>Dresses</p>
            <p className='text-gray-500 hover:text-amber-500'>Sunglasses</p>
          </div>

          <div>
            <p className='font-bold'>LINKS</p>
            <p className='text-gray-500 hover:text-amber-500'>Search</p>
            <p className='text-gray-500 hover:text-amber-500'>About Us</p>
            <p className='text-gray-500 hover:text-amber-500'>Contact Us</p>
            <p className='text-gray-500 hover:text-amber-500'>Returns</p>
          </div>

          <div>
            <p className='font-bold'>HELP</p>
            <p className='text-gray-500 hover:text-amber-500'>Track Order</p>
            <p className='text-gray-500 hover:text-amber-500'>Returns</p>
            <p className='text-gray-500 hover:text-amber-500'>Shipping</p>
            <p className='text-gray-500 hover:text-amber-500'>FAQs</p>
          </div>

           <div className='flex flex-col gap-3'>
            <p className='font-bold'>NEWSLETTER</p>
            <input className='border-none'  type="text" placeholder='Email Adress' name='contact[email]' id='subscribe_email' required='' aria-label='Email address' autoCorrect='off' autoCapitalize='off' />

            <button className='bg-black text-white rounded-3xl p-3'>Subscribe</button>
          </div>

        </div>


        <div className=' grid place-content-center p-7 pt-10 pl-50 gap-25 items-center'>
          <p>&copy; Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.</p>

        </div>
      </footer></>
  )
}
