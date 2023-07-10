import { useState } from 'react'
import {
  Drawer,
  List,
  ListItemText,
  IconButton,
  ListItemButton,
  Divider,
  Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const DrawerComp = () => {
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
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Propiedades</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Quienes somos</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Contacto</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <Button sx={{ padding: 0.5 }}>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          sx={{
            display: { xs: 'flex', md: 'none', lg: 'none' },
            boxShadow: 3,
            marginRight: 0,
            borderRadius: 2,
            color: 'black',
          }}
        >
          <MenuIcon />
        </IconButton>
      </Button>
    </>
  )
}

export default DrawerComp
