import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import {motion} from 'framer-motion';

// import { classNames } from '/utils'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          bg-cyan-600 hover:bg-cyan-700 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none cursor-[url('/pointer.png'),_pointer]
        `}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}