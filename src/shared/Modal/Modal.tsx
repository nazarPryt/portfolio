import {
   Dialog,
   DialogClose,
   DialogContent,
   DialogOverlay,
   DialogDescription,
   DialogPortal,
   DialogTitle,
} from '@radix-ui/react-dialog'

import s from './Modal.module.scss'
import {ComponentProps} from 'react'
import {CloseIcon} from '@/icons/CloseIcon'

export type ModalProps = {
   onClose?: () => void
   open: boolean
   title: string
} & ComponentProps<'div'>

export const Modal = ({children, title, onClose, open = false}: ModalProps) => {
   function handleModalClosed() {
      onClose?.()
   }

   return (
      <Dialog onOpenChange={handleModalClosed} open={open}>
         <DialogPortal>
            <DialogOverlay className={s.Overlay} />
            <DialogContent className={s.Content}>
               <DialogTitle asChild>
                  <header className={s.header}>
                     <h3>{title}</h3>
                     <DialogClose className={s.closeButton} aria-label='Close'>
                        <CloseIcon />
                     </DialogClose>
                  </header>
               </DialogTitle>
               <DialogDescription asChild />
               <div className={s.contentBox}>{children}</div>
            </DialogContent>
         </DialogPortal>
      </Dialog>
   )
}
