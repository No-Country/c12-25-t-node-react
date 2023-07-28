import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Divider, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import { useUserStore } from '../../store/auth'
import { FavoriteIconMenu, LogoutIconMenu } from './Icons'
import PrimaryButton from './PrimaryButton'

const DropdownButton: React.FC = () => {
  const navigate = useNavigate()
  const logOut = useUserStore((state) => state.logout)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  const handleMenuClose = () => setAnchorEl(null)
  const handleLogOut = () => {
    logOut()
    navigate('/')
  }
  const handleToHome = () => {
    handleMenuClose()
    navigate('/')
  }
  const handleToSearch = () => {
    handleMenuClose()
    navigate('/search')
  }
  const handleToAbout = () => {
    handleMenuClose()
    navigate('/about')
  }
  const handleToContact = () => {
    handleMenuClose()
    navigate('/contact')
  }
  const handleToFavorites = () => {
    handleMenuClose()
    navigate('/favorites')
  }

  return (
    <>
      <PrimaryButton
        text="Mi cuenta"
        onClick={handleButtonClick}
        sx={{ margin: '6px' }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {isMd && (
          <div>
            <MenuItem onClick={handleToHome}>Home</MenuItem>
            <Divider />
            <MenuItem onClick={handleToSearch}>Propiedades</MenuItem>
            <Divider />
            <MenuItem onClick={handleToAbout}>Quienes somos</MenuItem>
            <Divider />
            <MenuItem onClick={handleToContact}>Contacto</MenuItem>
            <Divider />
          </div>
        )}
        {isMd ? (
          <MenuItem onClick={handleToFavorites}>
            <FavoriteIconMenu />
            Mis favoritos
          </MenuItem>
        ) : (
          ''
        )}

        <Divider />
        <MenuItem onClick={handleLogOut}>
          <LogoutIconMenu />
          Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  )
}

export default DropdownButton
