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
import { NAVIGATE_OPTIONS } from './DrawerNavBar.constants'
import './DrawerNavBar.styles.css'
const DrawerNavBar = () => {
  const navigate = useNavigate()
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer
        open={ openDrawer }
        onClose={ () => setOpenDrawer(false) }
        sx={ {
          display: { xs: 'flex', md: 'none', lg: 'none' },
        } }
        className="DrawerNavBarExpand"
      >
        <List>
          { NAVIGATE_OPTIONS && NAVIGATE_OPTIONS.map(option => (
            <div key={ option.text }>
              <ListItemButton onClick={ () => navigate(`${ option.to }`) }>
                <ListItemText> { option.text }</ListItemText>
              </ListItemButton>
              <Divider />
            </div>
          )) }
        </List>
      </Drawer>
      <IconButton
        onClick={ () => setOpenDrawer(!openDrawer) }
        sx={ {
          display: { xs: 'flex', md: 'none', lg: 'none' },
          padding: 0.5,
          boxShadow: 3,
          marginRight: 1,
          borderRadius: 2,
          color: 'black',
        } }
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}

export default DrawerNavBar
