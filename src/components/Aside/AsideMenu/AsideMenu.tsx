'use client'
import {Aside} from '@/components/Aside'
import {useState} from 'react'
import {Burger} from '@/components/Aside/Burger'
import s from './AsideMenu.module.scss'

export const AsideMenu = () => {
   const [open, setOpen] = useState(false)

   const openSideBar = () => {
      console.log('rrr', open)
      setOpen(true)
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
         <Burger open={open} onClose={closeSideBar} onOpen={openSideBar}>
            <Aside closeSideBar={closeSideBar} />
         </Burger>
      </>
   )
}
