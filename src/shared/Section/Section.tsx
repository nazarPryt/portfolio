import s from './Section.module.scss'
import {ComponentPropsWithoutRef} from 'react'
import {Container} from '@/shared/Container'

export type Props = {
   title?: string
   p?: string
} & ComponentPropsWithoutRef<'section'>

export const Section = ({p, title, children, className, ...rest}: Props) => {
   return (
      <section className={`${s.wrapper} ${className}`} {...rest}>
         <Container>
            <div className={s.SectionHeader}>
               <h1>{title}</h1>
               <p>{p}</p>
            </div>
            {children}
         </Container>
      </section>
   )
}
