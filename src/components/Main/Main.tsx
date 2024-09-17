import s from './Main.module.scss'
import {Hero} from './Sections/Hero'
import {About} from './Sections/About'

export const Main = () => {
   return (
      <main className={s.wrapper}>
         <Hero />
         <About />
      </main>
   )
}
