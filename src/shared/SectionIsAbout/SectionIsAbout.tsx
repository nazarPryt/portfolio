import s from './SectionIsAbout.module.scss'

export type Props = {
   title: string
   p: string
}

export const SectionIsAbout = ({p, title}: Props) => {
   return (
      <div className={s.wrapper}>
         <h1>{title}</h1>
         <p>{p}</p>
      </div>
   )
}
