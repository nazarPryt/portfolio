import s from './Project.module.scss'
import Image, {StaticImageData} from 'next/image'
import {ReactNode} from 'react'
import Link from 'next/link'

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
            <h2>{title}</h2>
            <article>{children}</article>
            <ul>
               {stack.map(item => (
                  <li key={item}>{item}</li>
               ))}
            </ul>
         </div>
         <div className={s.projectImage}>
            <Link href={'/'}>
               <Image src={cover} alt={'project cover'} />
            </Link>
         </div>
      </li>
   )
}
