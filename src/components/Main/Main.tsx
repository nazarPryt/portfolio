import s from './Main.module.scss'
import {Sections} from '@/components/Sections'

export const Main = () => {
   return (
      <main className={s.wrapper}>
         <Sections />
      </main>
   )
}
