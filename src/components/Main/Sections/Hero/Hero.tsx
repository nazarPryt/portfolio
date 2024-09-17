import s from './Hero.module.scss'
import Image from 'next/image'
import heroBg from '@/public/bg/hero-bg.jpg'

export const Hero = () => {
   return (
      <section className={s.wrapper}>
         <Image src={heroBg} alt={'heroBg'} />
         <h1>Nazar Prytuliak</h1>
         <p>Frontend Web Developer</p>
      </section>
   )
}
