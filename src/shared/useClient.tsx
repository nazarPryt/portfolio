// Custom hook to check if rendering on client
import {useEffect, useState} from 'react'

export const useClient = () => {
   const [isClient, setIsClient] = useState(false)

   useEffect(() => {
      setIsClient(true)
   }, [])

   return isClient
}
