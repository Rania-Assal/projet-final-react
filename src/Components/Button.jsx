import React, { useState, useEffect } from 'react'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 bg-gray-600 text-white p-3 rounded-md shadow-lg hover:bg-orange-600 transition flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <MdKeyboardDoubleArrowUp size={24} />
    </button>
  ) : null
}
