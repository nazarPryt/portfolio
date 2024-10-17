'use client'
import {Section} from '@/shared/Section'
import {ChangeEvent, FormEvent, useState} from 'react'
import s from './Contact.module.scss'

export const Contact = () => {
   const p =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus autem, culpa dignissimos dolore eligendi eos error esse explicabo facere hic impedit necessitatibus nihil nisi rerum sint tempore! Doloremque, ut.'
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   })
   const [status, setStatus] = useState('')

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target
      setFormData(prevData => ({...prevData, [name]: value}))
   }

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      setStatus('Sending...')

      const response = await fetch('/api/contact', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })

      if (response.ok) {
         setStatus('Message sent successfully!')
         setFormData({name: '', email: '', message: ''})
      } else {
         setStatus('Something went wrong. Please try again.')
      }
   }

   return (
      <Section id={'contact'} title={'Contact me'} className={s.wrapper} p={p}>
         <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
               Name:
               <input
                  type='text'
                  id='name'
                  placeholder={'Your Name'}
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
            </label>

            <label htmlFor='email'>
               Email:
               <input
                  type='email'
                  id='email'
                  placeholder={'Email'}
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </label>

            <label htmlFor='message'>
               Message:
               <textarea
                  id='message'
                  name='message'
                  placeholder={'Message...'}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required
               />
            </label>

            <button type='submit'>Send Message</button>
            <p>{status}</p>
         </form>
      </Section>
   )
}
