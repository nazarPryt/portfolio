export const InstagramIcon = () => {
   return (
      <svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
         <title>Instagram</title>
         <radialGradient id='a' cx='.4' cy='1' r='1'>
            <stop offset='.1' stopColor='#fd5' />
            <stop offset='.5' stopColor='#ff543e' />
            <stop offset='1' stopColor='#c837ab' />
         </radialGradient>
         <linearGradient id='b' x2='.2' y2='1'>
            <stop offset='.1' stopColor='#3771c8' />
            <stop offset='.5' stopColor='#60f' stopOpacity='0' />
         </linearGradient>
         <rect id='c' height='512' rx='15%' width='512' />
         <use fill='url(#a)' href='#c' />
         <use fill='url(#b)' href='#c' />
         <g fill='none' stroke='#fff' strokeWidth='30'>
            <rect height='308' rx='81' width='308' x='102' y='102' />
            <circle cx='256' cy='256' r='72' />
            <circle cx='347' cy='165' r='6' />
         </g>
      </svg>
   )
}
