'use client'
import {Section} from '@/shared/Section'
import {ChangeEvent, FormEvent, useState} from 'react'
import s from './Contact.module.scss'
import {Spinner} from '@/shared/Spinner'

import {Modal} from '@/shared/Modal'

const initialFormData = {name: '', email: '', message: ''}
const defaultMessage =
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus autem, culpa dignissimos dolore eligendi eos error esse explicabo facere hic impedit necessitatibus nihil nisi rerum sint tempore! Doloremque, ut.'

export const Contact = () => {
   const [formData, setFormData] = useState(initialFormData)
   const [status, setStatus] = useState<'Error' | 'Success' | 'Loading' | null>(null)
   const [open, setOpen] = useState(false)
   const [message, setMessage] = useState('')

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const {name, value} = e.target
      setFormData(prev => ({...prev, [name]: value}))
   }

   const handleModalClose = () => {
      setOpen(false)
      if (status === 'Success') setFormData(initialFormData)
   }

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault()
      setStatus('Loading')

      try {
         const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
         })

         if (!response.ok) throw new Error('Message could not be sent')

         setStatus('Success')
         setMessage('Your message was successfully sent!')
      } catch (error) {
         setStatus('Error')
         setMessage('Could not send the message. Please try again.')
      } finally {
         setOpen(true)
      }
   }

   return (
      <>
         <Modal open={open} onClose={handleModalClose} title={status || ''}>
            <p>{message}</p>
         </Modal>
         <Section id='contact' title='Contact Me' className={s.wrapper} p={defaultMessage}>
            <form onSubmit={handleSubmit}>
               <label htmlFor='name'>
                  Name:
                  <input
                     type='text'
                     id='name'
                     placeholder='Your Name'
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
                     placeholder='Email'
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
                     placeholder='Message...'
                     value={formData.message}
                     onChange={handleChange}
                     required
                  />
               </label>

               <button type='submit' disabled={status === 'Loading'}>
                  Send Message
               </button>
            </form>
            {status === 'Loading' && <Spinner fullScreen />}
         </Section>
      </>
   )
}
