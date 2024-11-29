import {Inter} from 'next/font/google'

export const defaultFont = Inter({
   subsets: ['latin', 'cyrillic'],
   style: ['normal'],
   display: 'swap',
   weight: ['300', '700'],
   variable: '--default-font',
})
