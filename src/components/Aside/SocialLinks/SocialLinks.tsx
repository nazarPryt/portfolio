import s from './SocialLinks.module.scss'
import Link from 'next/link'
import {FacebookIcon} from '@/icons/FacebookIcon'
import {InstagramIcon} from '@/icons/InstagramIcon'
import {LinkedinIcon} from '@/icons/LinkedinIcon'
import {IconGitHub} from '@/icons/GitHubIcon'
import {WhatsappIcon} from '@/icons/WhatsappIcon'
import {TelegramIcon} from '@/icons/TelegramIcon'
import {app} from '@/shared/app'

export const SocialLinks = () => {
   return (
      <div className={s.SocialLinks}>
         {/*<Link href='#' target='_blank'>*/}
         {/*   <FacebookIcon />*/}
         {/*</Link>*/}
         {/*<Link href='#' target='_blank'>*/}
         {/*   <InstagramIcon />*/}
         {/*</Link>*/}
         <Link href={app.mySocial.linkedin} target='_blank'>
            <LinkedinIcon />
         </Link>
         <Link href={app.mySocial.gitHub} target='_blank'>
            <IconGitHub />
         </Link>
         <Link href={app.mySocial.telegram} target='_blank'>
            <TelegramIcon />
         </Link>
         <Link href={app.mySocial.whatsapp} target='_blank'>
            <WhatsappIcon />
         </Link>
      </div>
   )
}
