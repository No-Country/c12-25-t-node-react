import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import Divider from '@mui/material/Divider'
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

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogOut = () => {
    logOut()
    navigate('/')
  }

  return (
    <>
      <Button onClick={handleButtonClick} variant="contained" color="primary">
        Mi Cuenta
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          {' '}
          <FavoriteIcon /> Mis favoritos
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogOut}>
          <LogoutIcon /> Cerrar sesión
        </MenuItem>
      </Menu>
    </>
  )
}

export default DropdownButton
