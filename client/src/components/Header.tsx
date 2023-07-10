import { useState, useEffect } from 'react'
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material'
import LogoText from './atom/LogoText'
import PrimaryButton from '../components/atom/PrimaryButton'
import { useNavigate, useLocation } from 'react-router-dom'
type HeaderProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Header: React.FC<HeaderProps> = ({title}) => {
  */
}
let tab = 0
const Header: React.FC<HeaderProps> = () => {
  let navigate = useNavigate()
  let { pathname } = useLocation()
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
        <Toolbar>
          <LogoText />
          <Tabs
            textColor="primary"
            value={selectedTab}
            onChange={(e, value) => handleTab(value)}
            indicatorColor="primary"
          >
            <Tab label="Home" sx={{ color: 'black', fontWeight: 10 }} />

            <Tab label="Propiedades" sx={{ color: 'black', fontWeight: 10 }} />
            <Tab
              label="Quienes somos"
              sx={{ color: 'black', fontWeight: 10 }}
            />
            <Tab label="Contacto" sx={{ color: 'black', fontWeight: 10 }} />
          </Tabs>
          <PrimaryButton text="Iniciar Sesión" sx={{ marginLeft: 'auto' }} />
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header
