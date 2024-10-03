'use client'
import s from './ScrollTop.module.scss'
import {ArrowUp} from '@/icons/ArrowUp'
import {useEffect, useState} from 'react'

export const ScrollTop = () => {
   const [isVisible, setIsVisible] = useState(false)

   // Show or hide the button based on scroll position
   const toggleVisibility = () => {
      if (window.scrollY > 100) {
         setIsVisible(true)
      } else {
         setIsVisible(false)
      }
   }

   // Scroll to top smoothly
   const handleScrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }

   useEffect(() => {
      // Add scroll event listener
      window.addEventListener('scroll', toggleVisibility)

      // Clean up the event listener on component unmount
      return () => {
         window.removeEventListener('scroll', toggleVisibility)
      }
   }, [])

   return (
      isVisible && (
         <button onClick={handleScrollTop} className={s.wrapper}>
            <ArrowUp />
         </button>
      )
   )
}
