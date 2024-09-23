import s from './About.module.scss'
import {Container} from '@/shared/Container'
import {SectionIsAbout} from '@/shared/SectionIsAbout'
import {Section} from '@/shared/Section'
import Image from 'next/image'
import myPhoto from '@/public/bg/my-profile-img.jpg'

export const About = () => {
   const p =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iusto tempora tempore. Accusamus atque beatae distinctio, dolore dolorum enim eos fugit harum inventore iusto odio omnis quibusdam quis quisquam veritatis!'
   return (
      <Section className={s.wrapper}>
         <Container>
            <SectionIsAbout p={p} title={'About'} />
            <div className={s.box}>
               <div>
                  <Image src={myPhoto} alt={'my photo'} />
               </div>
               <div>
                  <h2>Frontend Web Developer</h2>
                  <p>{p}</p>

                  <ul>
                     <li>
                        <b>Birthday:</b>1 May 1995
                     </li>
                     <li>
                        <b>Website:</b>www.example.com
                     </li>
                     <li>
                        <b>Phone:</b>+123 456 7890
                     </li>
                  </ul>

                  <p>{p}</p>
               </div>
            </div>
         </Container>
      </Section>
   )
}
