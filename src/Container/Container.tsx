import s from './Container.module.scss'
import {ComponentProps} from 'react'

export const Container = ({children, className, ...rest}: ComponentProps<'div'>) => {
   return (
      <div className={`${s.wrapper} ${className}`} {...rest}>
         {children}
      </div>
   )
}
