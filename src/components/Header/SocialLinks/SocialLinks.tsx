import s from './SocialLinks.module.scss'
import {FacebookIcon} from '@/icons/FacebookIcon'
import {InstagramIcon} from '@/icons/InstagramIcon'
import {LinkedinIcon} from '@/icons/LinkedinIcon'
import Link from 'next/link'

export const SocialLinks = () => {
   return (
      <div className={s.SocialLinks}>
         <Link href='#'>
            <FacebookIcon />
         </Link>
         <Link href='#'>
            <InstagramIcon />
         </Link>
         <Link href='#'>
            <LinkedinIcon />
         </Link>
      </div>
   )
}
