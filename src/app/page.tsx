import {Header} from '@/components/Header'
import {Main} from '@/components/Main'
import s from './page.module.scss'

export default function Home() {
   return (
      <div className={s.page}>
         <Header />
         <Main />
      </div>
   )
}
