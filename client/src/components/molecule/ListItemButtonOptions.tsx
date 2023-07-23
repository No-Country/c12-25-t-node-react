import { ReactNode, useState } from 'react'
import {
  Box,
  Collapse,
  ListItemButton,
  ListItemText
} from '@mui/material'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

interface ListItemButtonOptionsProps {
  textToDisplay: ReactNode
  children?: ReactNode
}

const ListItemButtonOptions: React.FC<ListItemButtonOptionsProps> = ({
  textToDisplay,
  children
}) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)

  return (
    <ListItemButton
      onClick={ handleClick }
      sx={ {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      } }
    >
      <Box sx={ styles.boxContainer }>
        <ListItemText primary={ textToDisplay} />
        { open ? <ExpandLess /> : <ExpandMore /> }
      </Box>
      <Box sx={ styles.boxOptions } >
        <Collapse
          in={ open }
          timeout="auto"
          unmountOnExit
          collapsedSize='100%'
          sx={{ width: '100%'}}
        >
          { children }
        </Collapse>
      </Box>
    </ListItemButton>
  )
}

export default ListItemButtonOptions

const styles = {
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  boxOptions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  }
}