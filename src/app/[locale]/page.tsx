import {Main} from '@/components/Main'
import {ScrollTop} from '@/shared/ScrollTop'
import {AsideMenu} from '@/components/Aside/AsideMenu'
import {setRequestLocale} from 'next-intl/server'
import {Metadata} from 'next'
import {Favicons} from '@/shared/Favicons'
import s from './page.module.scss'

import {getTranslations} from 'next-intl/server'

export async function generateMetadata({params: {locale}}: any): Promise<Metadata> {
   const t = await getTranslations({locale, namespace: 'Meta'})

   return {
      title: t('title'),
      description: t('description'),
      ...Favicons,
   }
}

export default function HomePage({params: {locale}}: any) {
   // Enable static rendering
   setRequestLocale(locale)
   return (
      <div className={s.wrapper}>
         <AsideMenu />
         <Main />
         <ScrollTop />
      </div>
   )
}
