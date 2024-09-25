import s from './Project.module.scss'
import Image from 'next/image'
import projectOne from '@/public/projects/projectOne.png'

export type ProjectProps = {}

export const Project = () => {
   return (
      <li className={s.wrapper}>
         <div className={s.projectDetails}>
            <h2>Instareplica</h2>
            <article>
               <p>
                  A next-gen social media platform blending the best features of popular apps. Share photos, videos, and
                  stories with interactive features like live streaming and polls. Prioritizes privacy and security
                  while fostering authentic connections worldwide.'
               </p>
               <p>
                  A next-gen social media platform blending the best features of popular apps. Share photos, videos, and
                  stories with interactive features like live streaming and polls. Prioritizes privacy and security
                  while fostering authentic connections worldwide.'
               </p>
               <p>
                  A next-gen social media platform blending the best features of popular apps. Share photos, videos, and
                  stories with interactive features like live streaming and polls. Prioritizes privacy and security
                  while fostering authentic connections worldwide.'
               </p>
            </article>
            <ul>
               <li>React</li>
               <li>Type Script</li>
            </ul>
         </div>
         <div className={s.projectCover}>
            <Image src={projectOne} alt={'project one'} />
         </div>
      </li>
   )
}
