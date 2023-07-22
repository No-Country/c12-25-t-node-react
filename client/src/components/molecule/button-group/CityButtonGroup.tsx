import React from 'react'
import {
  Button,
  ButtonGroup
} from '@mui/material'
import { City } from '../../../model/estate-detail'

interface CityButtonGroupProps {
  selectedCity: City
  onCityChange: (city: City) => void
}

const CityButtonGroup: React.FC<CityButtonGroupProps> = ({
  selectedCity,
  onCityChange
}) => {
  const cities = Object.values(City)

  return (
    <ButtonGroup
      orientation="vertical"
      variant="contained"
      color="primary"
      fullWidth
    >
      { cities.map((city) => (
        <Button
          key={ city }
          onClick={ () => onCityChange(city) }
          variant={ selectedCity === city ? 'contained' : 'outlined' }
          sx={{padding: '6px'}}
        >
          { city }
        </Button>
      )) }
    </ButtonGroup>
  )
}

export default CityButtonGroup