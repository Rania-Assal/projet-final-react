import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import carousel1 from '../assets/images/carousel1.jpg'
import carousel2 from '../assets/images/carousel2.jpg'
import carousel3 from '../assets/images/carousel3.webp'

import cards1 from '../assets/images/cards1.webp'
import cards2 from '../assets/images/cards2.webp'
import cards3 from '../assets/images/cards3.webp'
import cards4 from '../assets/images/cards4.webp'
import cards5 from '../assets/images/cards5.webp'
import cards6 from '../assets/images/cards6.webp'

import shopy1 from '../assets/images/shopy1.webp'
import shopy2 from '../assets/images/shopy2.webp'
import shopy3 from '../assets/images/shopy3.webp'
import shopy4 from '../assets/images/shopy4.jpg'
import shopy5 from '../assets/images/shopy5.webp'
import shopy6 from '../assets/images/shopy6.webp'
import shopy7 from '../assets/images/shopy7.webp'
import shopy8 from '../assets/images/shopy8.webp'

const slides = [
  { image: carousel1, paragraph: 'Women collection 2018', title: 'NEW ARRIVALS', button: 'Shop now' },
  { image: carousel2, paragraph: 'Women collection 2018', title: 'NEW ARRIVALS', button: 'Shop now' },
  { image: carousel3, paragraph: 'Women collection 2018', title: 'NEW ARRIVALS', button: 'Shop now' },
]

const productImages = [
  shopy1, shopy2, shopy3, shopy4,
  shopy5, shopy6, shopy7, shopy8
]

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const navigate = useNavigate()

  const handleNext = () => {
    if (startIndex + 4 < productImages.length) {
      setStartIndex(startIndex + 4)
    }
  }

  const handlePrev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4)
    }
  }

  return (
    <>

      <section className="bg-white p-8 z-0 relative mt-19">
        <div className="w-full h-[600px] relative overflow-hidden group">
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="min-w-full h-[600px] relative">
                  <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center gap-4">
                    <p className="mb-4 text-3xl">{slide.paragraph}</p>
                    <h1 className="text-7xl font-bold mb-2">{slide.title}</h1>
                    <button
                      onClick={() => navigate('/shop')}
                      className="bg-white text-black hover:bg-orange-600 px-9 py-2 rounded-3xl transition"
                    >
                      {slide.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-orange-500 rounded-full p-2.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-orange-500 rounded-full p-2.5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </section>


      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[cards1, cards2, cards3, cards4, cards5, cards6].map((card, index) => {
              const labels = ['DRESSES', 'WATCHES', 'BAGS', 'SUNGLASSES', 'FOOTWEAR', 'ACCESSORIES']
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden group rounded-lg shadow ${index === 4 ? '-mt-[200px]' : ''}`}
                  style={{ height: [0, 2, 4].includes(index) ? '450px' : '250px' }}
                >
                  <img
                    src={card}
                    alt={`card${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <button
                      onClick={() => navigate('/shop')}
                      className="bg-white text-black px-4 py-2 rounded-md shadow hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      {labels[index]}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">FEATURED PRODUCTS</h2>
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {productImages.slice(startIndex, startIndex + 4).map((img, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img src={img} alt={`product-${index}`} className="w-full h-70 object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <button
                      onClick={() => navigate('/shop')}
                      className="bg-black/70 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow transition disabled:opacity-30"
              disabled={startIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow transition disabled:opacity-30"
              disabled={startIndex + 4 >= productImages.length}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

          </div>
        </div>
      </section>
    </>
  )
}
