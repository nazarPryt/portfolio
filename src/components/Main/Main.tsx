import s from './Main.module.scss'
import {Hero} from './Sections/Hero'
import {About} from './Sections/About'
import {Portfolio} from './Sections/Portfolio'

export const Main = () => {
   return (
      <main className={s.wrapper}>
         {/*<Hero />*/}
         {/*<About />*/}
         <Portfolio />
      </main>
   )
}
