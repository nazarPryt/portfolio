import {DialogTrigger} from '@radix-ui/react-dialog'
import s from './BurgerMenuTrigger.module.scss'

type Props = {
   open: boolean
   setIsOpen: (isOpen: boolean) => void
}
export const BurgerMenuTrigger = ({setIsOpen, open}: Props) => {
   return (
      <DialogTrigger asChild>
         <button
            aria-label='Display the menu'
            className={`${s.Trigger} ${open ? s.isOpen : ''}`}
            onClick={() => setIsOpen(!open)}
         />
      </DialogTrigger>
   )
}
