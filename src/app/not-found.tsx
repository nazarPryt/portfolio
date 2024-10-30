import {useTranslations} from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
   const t = useTranslations('NotFoundPage')

   return (
      <div>
         <h1>{t('title')}</h1>
         <p>{t('description')}</p>
         <Link href='/public'>Return Home</Link>
      </div>
   )
}
