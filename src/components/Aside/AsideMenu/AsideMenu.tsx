'use client'
import {Aside} from '@/components/Aside'
import {elastic as Menu} from 'react-burger-menu'
import s from './AsideMenu.module.scss'
import {useState} from 'react'

export const AsideMenu = () => {
   const [isOpen, setOpen] = useState(false)

   const handleIsOpen = () => {
      setOpen(!isOpen)
   }

   const closeSideBar = () => {
      setOpen(false)
   }
   return (
      <>
         {/* Normal aside layout for larger screens */}
         <div className={s.wrapper}>
            <Aside />
         </div>

         {/* Burger Menu for smaller screens */}
         <Menu itemListElement={'div'} isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
            <Aside closeSideBar={closeSideBar} />
         </Menu>
      </>
   )
}
