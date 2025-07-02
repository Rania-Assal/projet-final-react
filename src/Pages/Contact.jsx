import React from 'react'
import news from '../assets/images/news.jpg'
export default function Contact() {
  return (
   <>
     <div className="relative overflow-hidden group">
           <img
             src={news}
             className="w-full h-[300px] object-cover"
           />
           <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 text-center px-4">
             <h3 className="text-4xl font-bold">CONTACT</h3>
           </div>
         </div>

       <section className="py-16 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

  
    <div className="rounded-md overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.6822073234102!2d-83.71685604946924!3d42.30664594636449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cac2c20114b69%3A0x96fe590afa21efb6!2s2300+Traverwood+Dr%2C+Ann+Arbor%2C+MI+48105!5e0!3m2!1sen!2s!4v1461260551915"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[400px] border-0"
      ></iframe>
    </div>

  
    <div className="bg-white p-8 rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us your message</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
          required
        ></textarea>
        
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-3xl hover:bg-orange-600 transition"
        >
          Send
        </button>
      </form>
    </div>

  </div>
</section>


   </>
  )
}
