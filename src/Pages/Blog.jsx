import React from 'react'
import news from '../assets/images/news.jpg'
import blog1 from '../assets/images/blog-01.jpg'
import blog2 from '../assets/images/blog-02.jpg'
import shopy1 from '../assets/images/shopy1.webp'
import shopy2 from '../assets/images/shopy2.webp'
import shopy3 from '../assets/images/shopy3.webp'
import shopy4 from '../assets/images/shopy4.jpg'
import shopy5 from '../assets/images/shopy5.webp'

export default function BlogPage() {
  return (
    <>

      <div className="relative overflow-hidden group">
        <img
          src={news}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30 text-center px-4">
          <h3 className="text-4xl font-bold">NEWS</h3>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <div className="group relative overflow-hidden">
            <img
              src={blog1}
              alt="Black Friday"
              className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="mt-4 space-y-2">
              <h2 className="text-xl font-bold">Black Friday Guide: Best Sales & Discount Codes</h2>
              <p className="text-sm text-gray-500">
                by fashe-theme Admin | crafts, street style | 1 Comments
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem...
              </p>
              <button className="text-orange-500 mt-2 hover:underline">Continue Reading</button>
            </div>
          </div>

          <div className="group relative overflow-hidden">
            <img
              src={blog2}
              alt="White Sneakers"
              className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="mt-4 space-y-2">
              <h2 className="text-xl font-bold">The White Sneakers Nearly Every Fashion Girls Own</h2>
              <p className="text-sm text-gray-500">
                by fashe-theme Admin | crafts, street style | 0 Comments
              </p>
              <p className="text-gray-600">
                Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis...
              </p>
              <button className="text-orange-500 mt-2 hover:underline">Continue Reading</button>
            </div>
          </div>
        </div>


        <div className="space-y-8">

          <div>
            <input
              type="text"
              placeholder="Search all articles..."
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>


          <div className="space-y-4">
            {[
              { img: shopy1, title: "Boxy T-Shirt 1" },
              { img: shopy2, title: "Boxy T-Shirt 2" },
              { img: shopy3, title: "Boxy T-Shirt 3" },
              { img: shopy4, title: "Boxy T-Shirt 4" },
              { img: shopy5, title: "Boxy T-Shirt 5" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <p className="text-sm font-medium">{item.title}</p>
              </div>
            ))}
          </div>


          <div>
            <h4 className="font-bold text-lg mb-2">Tags Cloud</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 border rounded hover:bg-amber-700">crafts</span>
              <span className="px-3 py-1 border rounded hover:bg-amber-700">street style</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
