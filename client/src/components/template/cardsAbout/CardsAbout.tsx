import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import './CardsAbout.styles.css'
import { Email, WhatsApp } from '@mui/icons-material';
import PrimaryButton from '../../atom/PrimaryButton';

interface CardsProps {
  image: string,
  name: string,
  lastName: string,
  position: string,
  isSpecialCard: boolean;
}
const CardsAbout: React.FC<CardsProps> = ({
  image, name, lastName, position, isSpecialCard
}) => {
  return (
    <Card sx={{
      width: '305px',
      height: '142px',
      background: '#F5F5F5',
      borderRadius: '10px',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      alignItems: 'center',
      ...(isSpecialCard && {
        height: '305px',
        flexDirection: 'column',
        justifyContent: 'flex-start'
      })

    }}>
      <CardMedia
        component="img"
        image={`./src/assets/personal/${image}`}
        alt="Card Image" sx={{
          width: '100px',
          height: '100px',
          margin: '19px',
          ...(isSpecialCard && {
            display: 'flex',
            alignSelf: 'flex-start'
          })
        }} />
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isSpecialCard ? 'space-between' : 'space-around',
        paddingTop: '22px',
        height: '100%',
        width: '100%',
        padding: '0 !important'

      }}>
        <Box sx={{
          paddingLeft: isSpecialCard ? '20px' : 0,

        }}>
          <Typography variant="h5" component="div" sx={{
            color: '#1B17E7',
            fontSize: '16px'
          }}>
            {name} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {position}
          </Typography>
        </Box>
        {isSpecialCard ? (
          <Box sx={{ display: 'flex', justifyContent: isSpecialCard ? 'flex-end' : 'center', alignItems: 'center', gap: '8px', paddingRight: '14px' }}>
            <PrimaryButton text={"Solicitar Reunion"} sx={{
              fontFamily: 'Monserrat',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: isSpecialCard ? '15px' : 0,
            }} />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px', paddingRight: '14px' }}>
            <IconButton color="secondary" size="small" sx={{ borderRadius: '5px', border: '1px solid #1DAEFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
              <Email fontSize="small" />
            </IconButton>
            <IconButton color="secondary" size="small" sx={{ borderRadius: '5px', border: '1px solid #1DAEFF', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
              <WhatsApp fontSize="small" />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card >
  )
}

export default CardsAbout