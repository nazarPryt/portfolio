import {Raleway, Poppins, Roboto} from 'next/font/google'

export const raleway = Raleway({
   subsets: ['latin'],
   display: 'swap',
   style: ['normal', 'italic'],
   variable: '--font-raleway',
   weight: ['100', '300', '400', '500', '700', '900'],
})

export const roboto = Roboto({
   subsets: ['latin'],
   style: ['normal', 'italic'],
   display: 'swap',
   weight: ['100', '300', '400', '500', '700', '900'],
   variable: '--font-roboto',
})

export const poppins = Poppins({
   subsets: ['latin'],
   display: 'swap',
   style: ['normal', 'italic'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--font-poppins',
})
