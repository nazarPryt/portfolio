import s from './Sections.module.scss'
import {Home} from '@/components/Sections/ui/Home'

export const Sections = () => {
   return (
      <div className={s.Sections}>
         <Home />
      </div>
   )
}
