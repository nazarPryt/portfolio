import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogDescription,
   DialogOverlay,
   DialogPortal,
   DialogTitle,
} from '@radix-ui/react-dialog'
import {CloseIcon} from '@/icons/CloseIcon'
import {ComponentProps} from 'react'
import s from './Burger.module.scss'
import {BurgerMenuTrigger} from '@/components/Aside/Burger/BurgerMenuTrigger'

export type BurgerProps = {onClose: () => void; onOpen: () => void; open: boolean} & ComponentProps<'div'>

export const Burger = ({children, onClose, onOpen, open = false}: BurgerProps) => {
   const handleOpenChange = (isOpen: boolean) => {
      if (isOpen) {
         onOpen()
      } else {
         onClose()
      }
   }

   return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
         <BurgerMenuTrigger open={open} setIsOpen={handleOpenChange} />
         <DialogPortal>
            <DialogOverlay className={s.Overlay} />
            <DialogContent className={s.Content}>
               <DialogTitle />
               <DialogDescription />
               {children}
               <DialogClose className={s.closeButton} aria-label='Close'>
                  <CloseIcon />
               </DialogClose>
            </DialogContent>
         </DialogPortal>
      </Dialog>
   )
}
