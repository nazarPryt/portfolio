import {Raleway, Poppins, Roboto} from 'next/font/google'

export const headingFont = Raleway({
   subsets: ['latin'],
   display: 'swap',
   style: ['normal', 'italic'],
   variable: '--heading-font',
   weight: ['100', '300', '400', '500', '700', '900'],
})

export const defaultFont = Roboto({
   subsets: ['latin'],
   style: ['normal', 'italic'],
   display: 'swap',
   weight: ['100', '300', '400', '500', '700', '900'],
   variable: '--default-font',
})

export const navFont = Poppins({
   subsets: ['latin'],
   display: 'swap',
   style: ['normal', 'italic'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   variable: '--nav-font',
})
