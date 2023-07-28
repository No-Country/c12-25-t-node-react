import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Tabs, Tab, Box } from '@mui/material'
import LogoText from '../atom/LogoText'
import PrimaryButton from '../atom/PrimaryButton'
import AccountButton from '../atom/AccountButton'
import { stylesHeader } from './Header.styles'

type HeaderProps = {}
let tab = 0
const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const tabArray = ['Home', 'Propiedades', 'Quienes somos', 'Contacto']
  const [selectedTab, setSelectedTab] = useState<number>(tab)

  useEffect(() => {
    switch (pathname) {
      case '/':
        tab = 0
        break
      case '/search':
        tab = 1
        break
      case '/search/':
        tab = 1
        break
      case '/about':
        tab = 2
        break
      case '/contact':
        tab = 3
        break
      case '/login':
        tab = 0
        break
      case '/favorites':
        tab = 4
        break
      default:
        break
    }
    setSelectedTab(tab)
  }, [pathname, selectedTab])

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
      case 4:
        setSelectedTab(4)
        navigate('/favorites')
        break
      default:
        break
    }
  }

  return (
    <>
      <header>
        <AppBar position="fixed" sx={{ backgroundColor: '#f5f5f5' }}>
          <Toolbar disableGutters={true} sx={stylesHeader.toolBar}>
            <Box sx={stylesHeader.boxContainer}>
              <LogoText variant="h1" aria-label="Logo de Appartamentos" />
            </Box>
            <Tabs
              sx={stylesHeader.tabs}
              textColor="primary"
              value={selectedTab}
              onChange={(e, value) => handleTab(value)}
              indicatorColor={selectedTab > 4 ? 'white' : 'primary'}
            >
              {tabArray.map((tab) => (
                <Tab label={tab} key={tab} sx={stylesHeader.tab} />
              ))}
              {localStorage.getItem('user') ? (
                <Tab
                  label={'Favoritos'}
                  key={'Favoritos'}
                  sx={stylesHeader.tab}
                />
              ) : (
                ''
              )}
            </Tabs>
            {localStorage.getItem('user') ? (
              <AccountButton />
            ) : (
              <PrimaryButton
                text="Iniciar sesión"
                sx={{ margin: '4px' }}
                size="small"
                onClick={() => navigate('/login')}
                aria-label="Iniciar sesión"
              />
            )}
          </Toolbar>
        </AppBar>
      </header>
    </>
  )
}

export default Header
