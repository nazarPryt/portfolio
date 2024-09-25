import s from './Portfolio.module.scss'
import {Section} from '@/shared/Section'
import {Container} from '@/shared/Container'
import {SectionIsAbout} from '@/shared/SectionIsAbout'
import {Project} from '@/components/Main/Sections/Portfolio/Project'

export const Portfolio = () => {
   const p =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi architecto delectus dignissimos ea earum eligendi ipsam maxime, mollitia nihil odit perferendis provident quasi ratione recusandae saepe sapiente ut vel.'

   return (
      <Section className={s.wrapper}>
         <Container>
            <SectionIsAbout title={'My Projects'} p={p} />
            <ul className={s.box}>
               <Project />
               <Project />
               <Project />
               <Project />
            </ul>
         </Container>
      </Section>
   )
}
