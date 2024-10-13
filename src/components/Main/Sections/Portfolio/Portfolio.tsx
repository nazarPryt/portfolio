import s from './Portfolio.module.scss'
import {Section} from '@/shared/Section'
import {Instareplica} from '@/components/Main/Sections/Portfolio/Projects/Instareplica'

export const Portfolio = () => {
   const p =
      'Here’s a selection of recent projects that showcase my skills in frontend development. Each project reflects my commitment to clean code, responsive design, and delivering engaging user experiences. Explore how I apply modern web technologies to create dynamic and functional websites.'

   return (
      <Section className={s.wrapper} id={'portfolio'} title={'My Latest Projects'} p={p}>
         <ul className={s.box}>
            <Instareplica />
            <Instareplica />
         </ul>
      </Section>
   )
}
