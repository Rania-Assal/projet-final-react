import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
  const [step, setStep] = useState('options')
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="max-w-6xl mx-auto my-16 p-4">
      {step === 'options' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
          <div className="border p-8 rounded shadow-sm">
            <h2 className="text-3xl font-semibold mb-2">New Customer</h2>
            <p className="text-gray-700 font-semibold mb-2">Register Account</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
            </p>
            <button
              className="bg-neutral-800 text-white px-6 py-2 hover:bg-orange-500 transition"
              onClick={() => setStep('register')}
            >
              CONTINUE
            </button>
          </div>

          <div className="border p-8 rounded shadow-sm">
            <h2 className="text-3xl font-semibold mb-2">Returning Customer</h2>
            <p className="text-gray-700 font-semibold mb-4">I am a returning customer</p>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                required
              />
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot your password?
              </a>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-neutral-800 text-white px-6 py-2 hover:bg-orange-500 transition"
                >
                  SIGN IN
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="text-sm text-gray-500 hover:underline"
                >
                  or Return to Store
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {step === 'register' && (
        <div className="max-w-2xl mx-auto border p-8 rounded shadow-sm">
          <h2 className="text-3xl font-semibold mb-6">Create Account</h2>

          <p className="text-gray-700 font-semibold mb-4">Your Personal Details</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-orange-600 transition"
            >
              Create Account
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-sm text-gray-500 hover:underline mt-4"
            >
              or Return to Store
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
