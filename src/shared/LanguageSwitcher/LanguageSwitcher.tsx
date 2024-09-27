'use client'
import {useLocale, useTranslations} from 'next-intl'
import {routing} from '@/i18n/routing'
import {useParams} from 'next/navigation'
import {ChangeEvent, ReactNode, useTransition} from 'react'
import {usePathname, useRouter} from '@/i18n/routing'
import s from './LanguageSwitcher.module.scss'
import {linkGc} from 'next/dist/client/app-link-gc'

type Props = {
   children: ReactNode
   defaultValue: string
   label: string
}

export const LocaleSwitcherSelect = ({children, defaultValue, label}: Props) => {
   const router = useRouter()
   const [isPending, startTransition] = useTransition()
   const pathname = usePathname()
   const eparams = useParams()

   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
      const nextLocale = event.currentTarget.value as any

      startTransition(() => {
         router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            pathname,
            {locale: nextLocale},
         )
         console.log('clicked')
      })
   }

   return (
      <label>
         <p>{label}</p>
         <select defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange}>
            {children}
         </select>
      </label>
   )
}

export const LocaleSwitcher = () => {
   const t = useTranslations('LocaleSwitcher')
   const locale = useLocale()

   return (
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
         {routing.locales.map(cur => (
            <option key={cur} value={cur}>
               {t('locale', {locale: cur})}
            </option>
         ))}
      </LocaleSwitcherSelect>
   )
}
