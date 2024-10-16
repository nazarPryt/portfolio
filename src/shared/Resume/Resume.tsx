import Link from 'next/link'
import s from './Resume.module.scss'

export const Resume = () => {
   return (
      <div className={s.wrapper}>
         <Link href={'/resume/CV_Frontend_Nazar_Prytuliak.pdf'} target={'_blank'}>
            Resume
         </Link>
      </div>
   )
}
