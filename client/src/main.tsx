import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { appArtamentosTheme } from './theme/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import SpinnerProvider from './context/SpinnerProvider.tsx'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={appArtamentosTheme}>
      <SnackbarProvider
        maxSnack={5}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <CssBaseline>
          <SpinnerProvider>
            <App />
          </SpinnerProvider>
        </CssBaseline>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)
