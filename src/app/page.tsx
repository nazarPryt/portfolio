import {Header} from '@/components/Header'
import {Main} from '@/components/Main'
import s from './page.module.scss'

export default function HomePage() {
   return (
      <div className={s.wrapper}>
         <Header />
         <Main />
      </div>
   )
}
