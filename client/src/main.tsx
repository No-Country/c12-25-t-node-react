import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { appArtamentosTheme } from './theme/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import SpinnerProvider from './context/SpinnerProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ appArtamentosTheme }>
      <CssBaseline>
        <SpinnerProvider>
          <App />
        </SpinnerProvider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
)
