import s from './Hero.module.scss'
import Image from 'next/image'
import heroBg from '../../../../../public/bg/hero-bg.jpg'
import {Container} from '@/shared/Container'

export const Hero = () => {
   return (
      <section className={s.wrapper}>
         <Image src={heroBg} alt={'heroBg'} priority={false} placeholder={'blur'} />
         <Container>
            <h1>Nazar Prytuliak</h1>
            <p>Frontend Web Developer</p>
         </Container>
      </section>
   )
}
