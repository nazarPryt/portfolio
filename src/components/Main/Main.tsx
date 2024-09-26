import {Hero} from './Sections/Hero'
import {About} from './Sections/About'
import {Portfolio} from './Sections/Portfolio'
import s from './Main.module.scss'

export const Main = () => {
   return (
      <main className={s.wrapper}>
         <Hero />
         <About />
         <Portfolio />
      </main>
   )
}
