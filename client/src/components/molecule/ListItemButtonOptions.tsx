import { ReactNode, useState } from 'react'
import { Box, ListItemButton } from '@mui/material'
import { stylesListItemButtonOptions } from './ListItemButtonOptions.styles'

interface ListItemButtonOptionsProps {
  children?: ReactNode
}

const ListItemButtonOptions: React.FC<ListItemButtonOptionsProps> = ({
  children
}) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)

  return (
    <ListItemButton sx={ stylesListItemButtonOptions.ListItemBtn }
      onClick={ handleClick }
    >
      <Box sx={ stylesListItemButtonOptions.boxContainer }>
        { children }
      </Box>
    </ListItemButton>
  )
}

export default ListItemButtonOptions

