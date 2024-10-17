import {Section} from '@/shared/Section'
import s from './Contact.module.scss'

export const Contact = () => {
   const p =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus autem, culpa dignissimos dolore eligendi eos error esse explicabo facere hic impedit necessitatibus nihil nisi rerum sint tempore! Doloremque, ut.'
   return (
      <Section id={'contact'} title={'Contact me'} className={s.wrapper} p={p}>
         <form action='#'>
            <input type='text' placeholder={'Your Name'} required />
            <input type='email' placeholder={'Email'} required />
            <textarea required placeholder={'Message...'} aria-required />
            <button>send message</button>
         </form>
      </Section>
   )
}
