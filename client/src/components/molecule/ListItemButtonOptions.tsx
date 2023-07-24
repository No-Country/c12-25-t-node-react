import { ReactNode, useState } from 'react'
import {
  Box,
  ListItemButton,
} from '@mui/material'

interface ListItemButtonOptionsProps {
  children?: ReactNode
}

const ListItemButtonOptions: React.FC<ListItemButtonOptionsProps> = ({
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
        { children }
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
  }
}