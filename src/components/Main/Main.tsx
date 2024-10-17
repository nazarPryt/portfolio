import {Hero} from './Sections/Hero'
import {About} from './Sections/About'
import {Portfolio} from './Sections/Portfolio'
import {Contact} from '@/components/Main/Sections/Contact'
import s from './Main.module.scss'

export const Main = () => {
   return (
      <main className={s.wrapper}>
         <Hero />
         <About />
         <Portfolio />
         <Contact />
      </main>
   )
}
