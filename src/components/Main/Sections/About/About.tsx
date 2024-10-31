import s from './About.module.scss'
import {Section} from '@/shared/Section'
import Image from 'next/image'
import myPhoto from '@/public/bg/my-profile-img.jpg'
import {ChevronRight} from '@/icons/ChevronRight'

export const About = () => {
   const p =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iusto tempora tempore. Accusamus atque beatae distinctio, dolore dolorum enim eos fugit harum inventore iusto odio omnis quibusdam quis quisquam veritatis!'
   return (
      <Section
         className={s.wrapper}
         id={'about'}
         p={
            'Hello! I’m Nazar Prytuliak, a passionate Frontend Web Developer specializing in crafting responsive,\n' +
            '                  interactive websites that balance functionality with visual appeal. My journey in web development has\n' +
            '                  been driven by curiosity and a commitment to creating seamless, engaging user experiences that leave a\n' +
            '                  lasting impression.'
         }
         title={'About'}
      >
         <div className={s.box}>
            <div>
               <Image src={myPhoto} alt={'my photo'} />
            </div>
            <div>
               <h2>Frontend Web Developer</h2>
               <p>
                  With a strong foundation in HTML, CSS, and JavaScript and experience in frameworks like Next.js, I’m
                  dedicated to building dynamic applications that meet modern standards. I’m always exploring the latest
                  tools and techniques to bring innovative ideas to life, ensuring that my projects are efficient,
                  scalable, and easy to use.
               </p>

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

               <p>
                  I’m always open to new challenges and collaborations, whether it’s creating a unique solution or
                  refining an existing idea. Let’s connect and see how we can make something exceptional together!
               </p>
            </div>
         </div>
      </Section>
   )
}
