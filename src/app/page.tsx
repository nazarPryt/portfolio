import {NavBar} from '@/components/NavBar'
import {Main} from '@/components/Main'
import s from './page.module.scss'

export default function Home() {
   return (
      <div className={s.page}>
         <NavBar />
         <Main />
      </div>
   )
}
