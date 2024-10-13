import s from './About.module.scss'
import {Section} from '@/shared/Section'
import Image from 'next/image'
import myPhoto from '@/public/bg/my-profile-img.jpg'
import {ChevronRight} from '@/icons/ChevronRight'

export const About = () => {
   const p =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iusto tempora tempore. Accusamus atque beatae distinctio, dolore dolorum enim eos fugit harum inventore iusto odio omnis quibusdam quis quisquam veritatis!'
   return (
      <Section className={s.wrapper} id={'about'} p={p} title={'About'}>
         <div className={s.box}>
            <div>
               <Image src={myPhoto} alt={'my photo'} />
            </div>
            <div>
               <h2>Frontend Web Developer</h2>
               <p>{p}</p>

               <ul>
                  <li>
                     <ChevronRight />
                     <strong>Birthday:</strong>15 September 1990
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Website:</strong>www.example.com
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Phone:</strong>+123 456 7890
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Degree:</strong>Master
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Email:</strong>email@example.com
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>City:</strong>Caserta, Italy
                  </li>
               </ul>

               <p>{p}</p>
            </div>
         </div>
      </Section>
   )
}
