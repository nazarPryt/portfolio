import s from './Modal.module.scss'

import {MouseEvent, ReactNode, useEffect} from 'react'

import {ReactPortal} from '@/shared/ReactPortal'
import {CloseIcon} from '@/icons/CloseIcon'

export type ModalProps = {children?: ReactNode; handleClose: () => void; isOpen: boolean; title: string}

export const Modal = ({children, handleClose, isOpen, title}: ModalProps) => {
   const handleCloseModal = () => {
      document.body.classList.remove('isModalOpen')
      handleClose()
   }
   const onModalClick = (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation()
   }

   useEffect(() => {
      isOpen && document.body.classList.add('isModalOpen')
      const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? handleClose() : null)

      document.body.addEventListener('keydown', closeOnEscapeKey)
      document.body.style.pointerEvents = ''

      return () => {
         document.body.removeEventListener('keydown', closeOnEscapeKey)
         document.body.style.pointerEvents = 'auto'
         document.body.classList.remove('isModalOpen')
      }
   }, [handleClose])

   if (!isOpen) {
      return null
   }

   return (
      <ReactPortal wrapperId={'react-portal-modal-container'}>
         <div className={`${s.wrapper} ${isOpen && s.open}`} onClick={onModalClick}>
            <div className={`${s.ModalContent} ${isOpen && s.open}`}>
               <div>
                  <div className={s.header}>
                     {title}
                     <button onClick={handleCloseModal}>
                        <CloseIcon />
                     </button>
                  </div>
               </div>
               {children}
            </div>
         </div>
      </ReactPortal>
   )
}
