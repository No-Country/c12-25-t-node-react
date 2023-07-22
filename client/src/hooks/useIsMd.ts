import { useState, useEffect } from 'react'

const useIsMd = () => {
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 1005)
    }

    handleResize() // Set initial value

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMd
}

export default useIsMd
