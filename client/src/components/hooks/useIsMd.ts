import { useTheme, useMediaQuery } from '@mui/material'
import { useState, useEffect } from 'react'

export const useIsMd = () => {
  const theme = useTheme()
  const [isMd, setIsMd] = useState(false)
  useEffect(() => {
    setIsMd(useMediaQuery(theme.breakpoints.down('md')))
  }, [])
  return { isMd }
}
