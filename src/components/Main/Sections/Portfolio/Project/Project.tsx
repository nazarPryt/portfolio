import s from './Project.module.scss'
import Image, {StaticImageData} from 'next/image'
import {ReactNode} from 'react'
import Link from 'next/link'
import {IconGitHub} from '@/icons/GitHubIcon'
import {IconExternal} from '@/icons/ExternalIcon'
import {NpmIcon} from '@/icons/NpmIcon'

type Props = {
   cover: StaticImageData
   title: string
   subTitle?: string
   stack: Array<string>
   bakEndStack?: Array<string>
   children: ReactNode
   githubLink: string
   frontendLink: string
   npmLink?: string
}

export const Project = ({
   cover,
   subTitle = 'Frontend',
   title,
   stack,
   children,
   frontendLink,
   githubLink,
   bakEndStack,
   npmLink,
}: Props) => {
   return (
      <li className={s.wrapper} id={title}>
         <div className={s.projectContent}>
            <span className={s.projectOverline}>{subTitle}</span>
            <h2 className={s.projectTitle}>
               <Link href={frontendLink} target='_blank'>
                  {title}
               </Link>
            </h2>

            <article className={s.projectDescription}>{children}</article>

            <ul className={s.projectTechList}>
               {stack.map(item => (
                  <li key={item}>{item}</li>
               ))}
            </ul>

            {bakEndStack && (
               <ul className={s.projectTechList}>
                  {bakEndStack.map(item => (
                     <li className={s.back} key={item}>
                        {item}
                     </li>
                  ))}
               </ul>
            )}

            <div className={s.projectLinks}>
               {npmLink && (
                  <Link href={npmLink} aria-label='NPM Link' target='_blank' className={s.npmIcon}>
                     <NpmIcon />
                  </Link>
               )}
               <Link href={githubLink} aria-label='GitHub Link' target='_blank'>
                  <IconGitHub />
               </Link>
               <Link href={frontendLink} aria-label='External Link' target='_blank'>
                  <IconExternal />
               </Link>
            </div>
         </div>

         <div className={s.projectImage}>
            <Link href={frontendLink} target='_blank'>
               <Image src={cover} alt={'project cover'} />
            </Link>
         </div>
      </li>
   )
}
