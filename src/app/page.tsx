import {Aside} from '@/components/Aside'
import {Main} from '@/components/Main'
import s from './page.module.scss'

export default function HomePage() {
   return (
      <div className={s.wrapper}>
         <Aside />
         <Main />
      </div>
   )
}
