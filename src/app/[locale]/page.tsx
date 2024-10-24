import {Main} from '@/components/Main'
import s from './page.module.scss'
import {ScrollTop} from '@/shared/ScrollTop'
import {AsideMenu} from '@/components/Aside/AsideMenu'

export default function HomePage() {
   return (
      <div className={s.wrapper}>
         <AsideMenu />
         <Main />
         <ScrollTop />
      </div>
   )
}
