import s from './Section.module.scss'
import {ComponentPropsWithoutRef} from 'react'

export const Section = ({children, className, ...rest}: ComponentPropsWithoutRef<'section'>) => {
   return (
      <section className={`${s.wrapper} ${className}`} {...rest}>
         {children}
      </section>
   )
}
