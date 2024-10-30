'use client'
import s from './LocaleSwitcher.module.scss'
import {useParams} from 'next/navigation'
import {ChangeEvent, ReactNode, useTransition} from 'react'
import {usePathname, useRouter} from '@/i18n/routing'

type Props = {
   children: ReactNode
   defaultValue: string
   label: string
}

export default function LocaleSwitcherSelect({children, defaultValue, label}: Props) {
   const router = useRouter()

   const [isPending, startTransition] = useTransition()
   const pathname = usePathname()
   const params = useParams()

   function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
      const nextLocale = event.target.value as any
      startTransition(() => {
         router.replace(
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            pathname,
            {locale: nextLocale},
         )
      })
   }

   return (
      <label className={s.wrapper}>
         <p>{label}:</p>
         <select defaultValue={defaultValue} disabled={isPending} onChange={onSelectChange}>
            {children}
         </select>
      </label>
   )
}
