import React from 'react'
import about from '../assets/images/about.jpg'
import imagabout from '../assets/images/imgabout.webp'

export default function About() {
  return (
 <>
   <div className="relative overflow-hidden group">
        <img
          src={about}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 text-center px-4">
          <h3 className="text-4xl font-bold">ABOUT</h3>
        </div>
      </div>

    <section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    <div className="overflow-hidden rounded-md shadow group">
  <img
    src={imagabout}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    alt="About Image"
  />
</div>

    <div className="text-gray-700 space-y-6">
      <h2 className="text-4xl font-bold text-gray-900">Our Story</h2>
      <p>
        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
      </p>
      <blockquote className="italic text-lg text-gray-600 border-l-4 border-gray-500 pl-4">
        "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while."
        <span className="block mt-2 font-semibold text-gray-900">– Steve Jobs</span>
      </blockquote>
    </div>

  </div>
</section>


 </>
  )
}
