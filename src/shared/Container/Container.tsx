import s from './Container.module.scss'
import {ComponentPropsWithoutRef} from 'react'

export const Container = ({children, ...rest}: ComponentPropsWithoutRef<'div'>) => {
   return (
      <div className={`container`} {...rest}>
         {children}
      </div>
   )
}