import React from 'react'
import page2 from '../assets/images/page2.webp'
import product1 from '../assets/images/shopy1.webp'
import product2 from '../assets/images/shopy2.webp'
import product3 from '../assets/images/shopy3.webp'
import product4 from '../assets/images/shopy4.jpg'




const productImages = [product1, product2, product3, product4]

export default function Shop() {
  return (
    <>

      <div className="relative overflow-hidden group">
        <img
          src={page2}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 text-center px-4">
          <h3 className="text-4xl font-bold">PRODUCTS</h3>
        </div>
      </div>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          <aside className="space-y-6 md:col-span-1">
            <div>
              <h3 className="font-semibold text-lg mb-2">Categories</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Best Seller (8 items)</li>
                <li>Featured (8 items)</li>
                <li>Men (8 items)</li>
                <li>Women (8 items)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Color</h3>
              <ul className="space-y-1 text-gray-600">
                <li>Black</li>
                <li>Gray</li>
                <li>Red</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Price</h3>
              <ul className="space-y-1 text-gray-600">
                <li>$0 - $20</li>
                <li>$20 - $40</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Size</h3>
              <ul className="space-y-1 text-gray-600">
                <li>L</li>
                <li>M</li>
                <li>S</li>
                <li>XL</li>
              </ul>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            />
          </aside>


          <div className="md:col-span-3 space-y-6">

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500">
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                </select>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500">
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>ALL</option>
                </select>
                <span className="text-gray-500 text-sm ml-36">Showing 1 to 6 of 8 items</span>
              </div>
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productImages.map((img, i) => (
                <div key={i} className="relative group bg-gray-100 rounded-lg overflow-hidden shadow">
                  <img
                    src={img}
                    alt={`Product ${i + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">Boxy{i + 1} T-Shirt with Roll Sleeve</h3>
                    <p className="text-orange-600 text-lg font-bold">$20.00</p>
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                    <button className="bg-black text-white px-5 py-2 rounded-3xl hover:bg-orange-600 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


