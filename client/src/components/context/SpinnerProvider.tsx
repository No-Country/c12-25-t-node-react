import { createContext, useContext } from 'react'
import useLoading from '../hooks/useLoading'
import { Backdrop, CircularProgress } from '@mui/material'

const defaultContext = {
  addLoading: () => { },
  removeLoading: () => { }
}

interface AppContextProps {
  addLoading: Function,
  removeLoading: Function
}

type Props = { children: JSX.Element }

export const SpinnerContext = createContext<AppContextProps>(defaultContext)

const SpinnerProvider = ({ children }: Props) => {
  const [loading, addLoading, removeLoading] = useLoading()

  return (
    <SpinnerContext.Provider value={ { addLoading, removeLoading } }>
      <Backdrop
        sx={ { color: 'fff', zIndex: (theme) => theme.zIndex.modal } }
        open={ loading }
      >
        <CircularProgress />
      </Backdrop>
      { children }
    </SpinnerContext.Provider>
  )
}

export default SpinnerProvider