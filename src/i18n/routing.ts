import {defineRouting} from 'next-intl/routing'
import {createSharedPathnamesNavigation} from 'next-intl/navigation'

//https://hygraph.com/blog/nextjs-internationalization

export const routing = defineRouting({
   // A list of all locales that are supported
   locales: ['en', 'de'],

   defaultLocale: 'en',
   localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
export const {Link, redirect, usePathname, useRouter} = createSharedPathnamesNavigation(routing)
