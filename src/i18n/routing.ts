import {defineRouting} from 'next-intl/routing'
import {createNavigation} from 'next-intl/navigation'

export const routing = defineRouting({
   locales: ['en', 'uk'],
   defaultLocale: 'en',
   localePrefix: 'as-needed',
   pathnames: {
      '/': '/',
      '/pathnames': {
         en: '/pathnames',
         uk: '/pathnames',
      },
   },
})

export type Pathnames = keyof typeof routing.pathnames
export type Locale = (typeof routing.locales)[number]

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing)
