import s from './Project.module.scss'
import Image, {StaticImageData} from 'next/image'
import {ReactNode} from 'react'
import Link from 'next/link'
import {IconGitHub} from '@/icons/GitHubIcon'
import {IconExternal} from '@/icons/ExternalIcon'

type Props = {
   cover: StaticImageData
   title: string
   stack: Array<string>
   children: ReactNode
}

export const Project = ({cover, title, stack, children}: Props) => {
   return (
      <li className={s.wrapper}>
         <div className={s.projectContent}>
            <span className={s.projectOverline}>Project</span>
            <h2 className={s.projectTitle}>
               <Link href={'/'}>{title}</Link>
            </h2>

            <article className={s.projectDescription}>{children}</article>

            <ul className={s.projectTechList}>
               {stack.map(item => (
                  <li key={item}>{item}</li>
               ))}
            </ul>

            <div className={s.projectLinks}>
               <Link href={'/'} aria-label='GitHub Link' target='_blank'>
                  <IconGitHub />
               </Link>
               <Link href={'/'} aria-label='External Link' target='_blank'>
                  <IconExternal />
               </Link>
            </div>
         </div>

         <div className={s.projectImage}>
            <Link href={'/'}>
               <Image src={cover} alt={'project cover'} />
            </Link>
         </div>
      </li>
   )
}
