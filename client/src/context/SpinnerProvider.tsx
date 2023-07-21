import { createContext, useContext } from 'react'
import {
  Backdrop,
  Box,
  CircularProgress,
  Typography
} from '@mui/material'
import useLoading from '../hooks/useLoading'

const defaultContext = {
  addLoading: () => { },
  removeLoading: () => { }
}

interface AppContextProps {
  addLoading: Function
  removeLoading: Function
}

type SpinnerProviderProps = {
  children: JSX.Element
}

export const SpinnerContext = createContext<AppContextProps>(defaultContext)

export const useSpinner = () => useContext(SpinnerContext)

const SpinnerProvider = ({ children }: SpinnerProviderProps) => {
  const [loading, addLoading, removeLoading] = useLoading()

  return (
    <SpinnerContext.Provider value={ { addLoading, removeLoading } }>
      <Backdrop
        sx={ { color: 'primary', zIndex: (theme) => theme.zIndex.modal + 1 } }
        open={ loading }
      >
        <Box
          style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem'
          } }
        >
          <CircularProgress size="3rem" />
          <Typography sx={ { fontWeight: '600', color: 'primary', letterSpacing: '1px' } }>
            Cargando...
          </Typography>
        </Box>
      </Backdrop>
      { children }
    </SpinnerContext.Provider>
  )
}

export default SpinnerProvider