import React from 'react'
import {
  Button,
  ButtonGroup
} from '@mui/material'
import { Operation } from '../../../model/estate-detail'

interface OperationButtonGroupProps {
  selectedOperation: Operation
  onOperationChange: (operation: Operation) => void
}

const OperationButtonGroup: React.FC<OperationButtonGroupProps> = ({
  selectedOperation,
  onOperationChange
}) => {
  const operations = Object.values(Operation)

  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      color="primary"
    >
      { operations.map((operation) => (
        <Button
          key={ operation }
          onClick={ () => onOperationChange(operation) }
          variant={
            selectedOperation === operation ? 'contained' : 'outlined'
          }
        >
          { operation }
        </Button>
      )) }
    </ButtonGroup>
  )
}

export default OperationButtonGroup