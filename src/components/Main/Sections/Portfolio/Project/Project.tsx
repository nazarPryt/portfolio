import s from './Project.module.scss'
import Image, {StaticImageData} from 'next/image'
import {ReactNode} from 'react'

type Props = {
   cover: StaticImageData
   title: string
   stack: Array<string>
   children: ReactNode
}

export const Project = ({cover, title, stack, children}: Props) => {
   return (
      <li className={s.wrapper}>
         <div className={s.projectDetails}>
            <h2>{title}</h2>
            <article>{children}</article>
            <ul>
               {stack.map(item => (
                  <li key={item}>{item}</li>
               ))}
            </ul>
         </div>
         <div className={s.projectCover}>
            <Image src={cover} alt={'project cover'} />
         </div>
      </li>
   )
}
