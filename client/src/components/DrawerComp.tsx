import { useState } from 'react'
import {
  Drawer,
  List,
  ListItemText,
  IconButton,
  ListItemButton,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

const DrawerComp = () => {
  const navigate = useNavigate()
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          display: { xs: 'flex', md: 'none', lg: 'none' },
        }}
      >
        <List>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/search')}>
            <ListItemText>Propiedades</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/about')}>
            <ListItemText>Quienes somos</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate('/contact')}>
            <ListItemText>Contacto</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>

      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{
          display: { xs: 'flex', md: 'none', lg: 'none' },
          padding: 0.5,
          boxShadow: 3,
          marginRight: 1,
          borderRadius: 2,
          color: 'black',
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerComp
