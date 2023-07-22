import React from 'react'
import {
  Button,
  ButtonGroup
} from '@mui/material'
import { Room } from '../../../model/estate-detail'

interface RoomButtonGroupProps {
  selectedRoom: Room
  onRoomChange: (room: Room) => void
}

const RoomButtonGroup: React.FC<RoomButtonGroupProps> = ({
  selectedRoom,
  onRoomChange
}) => {
  const rooms = Object.values(Room)

  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      color="primary"
      fullWidth
    >
      { rooms.map((room) => (
        <Button
          key={ room }
          onClick={ () => onRoomChange(room) }
          variant={ selectedRoom === room ? 'contained' : 'outlined' }
          sx={{padding: '6px'}}
        >
          { room }
        </Button>
      )) }
    </ButtonGroup>
  )
}

export default RoomButtonGroup