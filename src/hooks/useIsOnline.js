import { useState, useEffect } from 'react'

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    function handleOnload() {
      if (navigator.onLine) {
        // console.log("We're online!")
        handleOnline()
      } else {
        // console.log("We're offline...")
        handleOffline()
      }
    }

    window.addEventListener('load', handleOnload)
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('load', handleOnload)
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

export default useIsOnline
