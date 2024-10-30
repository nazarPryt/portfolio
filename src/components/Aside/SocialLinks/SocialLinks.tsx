import s from './SocialLinks.module.scss'
import {FacebookIcon} from '@/icons/FacebookIcon'
import {InstagramIcon} from '@/icons/InstagramIcon'
import {LinkedinIcon} from '@/icons/LinkedinIcon'
import Link from 'next/link'
import {IconGitHub} from '@/icons/GitHubIcon'

export const SocialLinks = () => {
   return (
      <div className={s.SocialLinks}>
         <Link href='#' target='_blank'>
            <FacebookIcon />
         </Link>
         <Link href='#' target='_blank'>
            <InstagramIcon />
         </Link>
         <Link href='https://linkedin.com/in/nazar-prytuliak' target='_blank'>
            <LinkedinIcon />
         </Link>
         <Link href='https://github.com/nazarPryt' target='_blank'>
            <IconGitHub />
         </Link>
      </div>
   )
}
