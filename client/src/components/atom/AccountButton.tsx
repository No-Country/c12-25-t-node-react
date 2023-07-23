import React, { useState } from 'react'
import {
  Button,
  Divider,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { useUserStore } from '../../store/auth'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import FavoriteIcon from '@mui/icons-material/Favorite'

const DropdownButton: React.FC = () => {
  const navigate = useNavigate()
  const logOut = useUserStore((state) => state.logout)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => setAnchorEl(null)
  const handleLogOut = () => {
    logOut()
    navigate('/')
  }
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
      <Button onClick={ handleButtonClick } variant="contained" color="primary">
        Mi Cuenta
      </Button>
      <Menu
        anchorEl={ anchorEl }
        open={ Boolean(anchorEl) }
        onClose={ handleMenuClose }
      >
        { isMd &&
          <div>
            <MenuItem onClick={ () => {
              handleMenuClose()
              navigate('/')
            } }>Home</MenuItem>
            <Divider />
            <MenuItem onClick={ () => {
              handleMenuClose()
              navigate('/search')
            } }>Propiedades</MenuItem>
            <Divider />
            <MenuItem onClick={ () => {
              handleMenuClose()
              navigate('/about')
            } }>Quienes somos</MenuItem>
            <Divider />
            <MenuItem onClick={ () => {
              handleMenuClose()
              navigate('/contact')
            } }>Contacto</MenuItem>
            <Divider />
          </div>
        }
        <MenuItem onClick={ () => {
          handleMenuClose()
          navigate('/favorites')
        } }>
          <FavoriteIcon /> Mis favoritos
        </MenuItem>
        <Divider />
        <MenuItem onClick={ handleLogOut }>
          <LogoutIcon /> Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  )
}

export default DropdownButton
