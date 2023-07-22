import React from 'react'
import {
  Button,
  ButtonGroup
} from '@mui/material'
import { Type } from '../../../model/estate-detail'

interface TypeButtonGroupProps {
  selectedType: Type
  onTypeChange: (type: Type) => void
}

const TypeButtonGroup: React.FC<TypeButtonGroupProps> = ({
  selectedType,
  onTypeChange
}) => {
  const types = Object.values(Type)

  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      color="primary"
    >
      { types.map((type) => (
        <Button
          key={ type }
          onClick={ () => onTypeChange(type) }
          variant={
            selectedType === type ? 'contained' : 'outlined'
          }
        >
          { type }
        </Button>
      )) }
    </ButtonGroup>
  )
}

export default TypeButtonGroup