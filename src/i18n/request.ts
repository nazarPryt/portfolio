import {getRequestConfig} from 'next-intl/server'
import {routing} from './routing'

// @ts-ignore
export default getRequestConfig(async ({requestLocale}) => {
   let locale = await requestLocale

   // Ensure that a valid locale is used
   if (!locale || !routing.locales.includes(locale as any)) {
      locale = routing.defaultLocale
   }

   return {
      locale,
      messages: (
         await (locale === 'en'
            ? // When using Turbopack, this will enable HMR for `en`
              import('../../messages/en.json')
            : import(`../../messages/${locale}.json`))
      ).default,
   }
})
