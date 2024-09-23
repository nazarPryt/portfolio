import s from './Container.module.scss'
import {ComponentPropsWithoutRef} from 'react'

export const Container = ({children, className, ...rest}: ComponentPropsWithoutRef<'div'>) => {
   return (
      <div className={`${s.wrapper} ${className}`} {...rest}>
         {children}
      </div>
   )
}
