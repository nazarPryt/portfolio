import s from './Sections.module.scss'
import {Home} from '@/components/Sections/ui/Home'
import {About} from '@/components/Sections/ui/About'

export const Sections = () => {
   return (
      <div className={s.wrapper}>
         <Home />
         <About />
      </div>
   )
}
