import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
} from '@mui/material'
import LogoText from '../atom/LogoText'
import PrimaryButton from '../atom/PrimaryButton'
import AccountButton from '../atom/AccountButton'

type HeaderProps = {}
let tab = 0

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const tabArray = ['Home', 'Propiedades', 'Quienes somos', 'Contacto']

  useEffect(() => {
    switch (pathname) {
      case '/':
        tab = 0
        break
      case '/search':
        tab = 1
        break
      case '/about':
        tab = 2
        break
      case '/contact':
        tab = 3
        break
      default:
        break
    }
    setSelectedTab(tab)
  }, [pathname])

  const [selectedTab, setSelectedTab] = useState(tab)
  const handleTab = (value: number) => {
    switch (value) {
      case 0:
        setSelectedTab(0)
        navigate('/')
        break
      case 1:
        setSelectedTab(1)
        navigate('/search')
        break
      case 2:
        setSelectedTab(2)
        navigate('/about')
        break
      case 3:
        setSelectedTab(3)
        navigate('/contact')
        break
      default:
        break
    }
  }

  return (
    <>
      <header>
        <AppBar position="fixed" sx={ { backgroundColor: '#f5f5f5' } }>
          <Toolbar
            disableGutters={ true }
            sx={ {
              display: 'flex',
              justifyContent: 'space-between',
            } }
          >
            <Box
              sx={ {
                display: 'flex',
                alignItems: 'center',
                marginRight: 1,
                marginLeft: 2,
              } }
            >
              <LogoText variant="h1" aria-label='Logo de Appartamentos' />
            </Box>
            <Tabs
              sx={ { display: { xs: 'none', md: 'flex', lg: 'flex' } } }
              textColor="primary"
              value={ selectedTab }
              onChange={ (e, value) => handleTab(value) }
              indicatorColor="primary"
            >
              { tabArray.map((tab) => (
                <Tab
                  label={ tab }
                  key={ tab }
                  sx={ { color: 'black', fontWeight: 10, marginRight: 2 } }
                />
              )) }
            </Tabs>
            {
              localStorage.getItem('user') ?
                <AccountButton />
                :
                <PrimaryButton
                  text="Iniciar sesión"
                  sx={ { margin: '4px' } }
                  size="small"
                  onClick={ () => navigate('/login') }
                  aria-label='Iniciar sesión'
                />
            }
          </Toolbar>
        </AppBar>
      </header>
    </>
  )
}

export default Header
