import s from './SocialLinks.module.scss'
import {FacebookIcon} from '@/icons/FacebookIcon'
import {InstagramIcon} from '@/icons/InstagramIcon'
import {LinkedinIcon} from '@/icons/LinkedinIcon'

export const SocialLinks = () => {
   return (
      <div className={s.SocialLinks}>
         <a href='#' className='facebook'>
            <FacebookIcon />
         </a>
         <a href='#' className='instagram'>
            <InstagramIcon />
         </a>
         <a href='#'>
            <LinkedinIcon />
         </a>
      </div>
   )
}
