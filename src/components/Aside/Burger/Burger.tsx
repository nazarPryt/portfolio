import {Dialog, DialogClose, DialogContent, DialogOverlay, DialogPortal, DialogTrigger} from '@radix-ui/react-dialog'
import {CloseIcon} from '@/icons/CloseIcon'
import {ComponentProps, useState} from 'react'
import s from './Burger.module.scss'

export type BurgerProps = {onClose?: () => void; onOpen?: () => void; open: boolean} & ComponentProps<'div'>

export const Burger = ({children, onClose, onOpen, open = false}: BurgerProps) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const handleChangeMenu = () => {
      setIsMenuOpen(!isMenuOpen)
   }
   function handleModalClosed() {
      onClose?.()
   }
   function handleModalOpen() {
      console.log('ggg')
      onOpen?.()
   }

   return (
      <Dialog open={open} onOpenChange={handleModalClosed}>
         <DialogTrigger asChild>
            <button className={s.Trigger} onClick={handleModalOpen}>
               open burger
            </button>
         </DialogTrigger>
         <DialogPortal>
            <DialogOverlay className={s.Overlay} />
            <DialogContent className={s.Content}>
               <div className={s.contentBox}>{children}</div>
               <DialogClose className={s.closeButton} aria-label='Close'>
                  <CloseIcon />
               </DialogClose>
            </DialogContent>
         </DialogPortal>
      </Dialog>
   )
}
