'use client'
import {Section} from '@/shared/Section'
import {ChangeEvent, FormEvent, useState} from 'react'
import s from './Contact.module.scss'
import {Spinner} from '@/shared/Spinner'
import {Modal} from '@/shared/Modal'
import {useTranslations} from 'next-intl'

const initialFormData = {name: '', email: '', message: ''}

export const Contact = () => {
   const t = useTranslations('section.ContactMe')

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

         setStatus(t('form.status.success') as 'Success')
         setMessage(t('form.status.successMessage'))
      } catch (error) {
         setStatus(t('form.status.error') as 'Error')
         setMessage(t('form.status.errorMessage'))
      } finally {
         setOpen(true)
      }
   }

   return (
      <>
         <Modal open={open} onClose={handleModalClose} title={status || ''}>
            <p>{message}</p>
         </Modal>
         <Section id='contact' title={t('title')} className={s.wrapper} p={t('p')}>
            <form onSubmit={handleSubmit}>
               <label htmlFor='name'>
                  {t('form.name')}:
                  <input
                     type='text'
                     id='name'
                     placeholder={t('form.yourName')}
                     name='name'
                     value={formData.name}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label htmlFor='email'>
                  {t('form.email')}:
                  <input
                     type='email'
                     id='email'
                     placeholder={t('form.email')}
                     name='email'
                     value={formData.email}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label htmlFor='message'>
                  {t('form.message')}:
                  <textarea
                     id='message'
                     name='message'
                     placeholder={t('form.message')}
                     value={formData.message}
                     onChange={handleChange}
                     required
                  />
               </label>

               <button type='submit' disabled={status === 'Loading'}>
                  {t('form.send')}
               </button>
            </form>
            {status === 'Loading' && <Spinner fullScreen />}
         </Section>
      </>
   )
}
