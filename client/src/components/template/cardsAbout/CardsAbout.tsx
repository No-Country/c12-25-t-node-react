import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import './CardsAbout.styles.css'
import { Email, WhatsApp } from '@mui/icons-material';

interface CardsProps {
  image: string,
  name: string,
  lastName: string,
  position: string
}
const CardsAbout: React.FC<CardsProps> = ({
  image, name, lastName, position
}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={`./src/assets/personal/${image}`}
        alt="Card Image" />
      <CardContent className='padding'>
        <Box>
          <Typography variant="h5" component="div">
            {name} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {position}
          </Typography>
        </Box>
        <Box>
          <IconButton color="secondary" size="small">
            <Email fontSize="small" />
          </IconButton>
          <IconButton color="secondary" size="small">
            <WhatsApp fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardsAbout