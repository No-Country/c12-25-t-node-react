import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import LogoText from './atom/LogoText'
import PrimaryButton from '../components/atom/PrimaryButton'
import { useNavigate, useLocation } from 'react-router-dom'
import DrawerComp from './DrawerComp'
import PersonIcon from '@mui/icons-material/Person'
type HeaderProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Header: React.FC<HeaderProps> = ({title}) => {
  */
}
let tab = 0
const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  console.log(theme)
  console.log(isMd)

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
    <header>
      <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
        <Toolbar
          disableGutters={true}
          sx={{
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 1 }}>
            <DrawerComp />

            <LogoText variant="h1" />
          </Box>
          <Tabs
            sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}
            textColor="primary"
            value={selectedTab}
            onChange={(e, value) => handleTab(value)}
            indicatorColor="primary"
          >
            <Tab
              label="Home"
              sx={{ color: 'black', fontWeight: 10, marginRight: 2 }}
            />

            <Tab
              label="Propiedades"
              sx={{ color: 'black', fontWeight: 10, marginRight: 2 }}
            />
            <Tab
              label="Quienes somos"
              sx={{ color: 'black', fontWeight: 10, marginRight: 2 }}
            />
            <Tab
              label="Contacto"
              sx={{ color: 'black', fontWeight: 10, marginRight: 2 }}
            />
          </Tabs>
          {!isMd ? (
            <PrimaryButton
              text="Iniciar Sesión"
              sx={{ marginRight: 2 }}
              size="small"
              onClick={() => navigate('/login')}
            />
          ) : (
            <IconButton
              sx={{
                marginRight: 2,
                boxShadow: 3,
                borderRadius: 2,
                color: 'black',
              }}
              onClick={() => navigate('/login')}
            >
              <PersonIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
