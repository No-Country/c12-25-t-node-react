import { Container, Grid } from '@mui/material'
import CardsAbout from './CardsAbout'
import persons from '../../../api/personal.json'

const CardsGrid = () => {

  return (
    <Container maxWidth="xl" sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* Contenedor para el contenido */}
          <Grid container spacing={2} justifyContent="space-around">
            {/* Primera columna */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {persons
                .filter((item: any) => item.id <= 2) // Filtrar las primeras 2 cards
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    isSpecialCard={false}
                  />
                ))}
            </Grid>
            {/* Segunda columna */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {persons
                .filter((item: any) => item.id > 2 && item.id <= 4) // Filtrar las cards 3 y 4
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    isSpecialCard={false}
                  />
                ))}
            </Grid>
            {/* Tercera columna */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {persons
                .filter((item: any) => item.id > 4 && item.id <= 6) // Filtrar las cards 5 y 6
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    isSpecialCard={false}
                  />
                ))}
            </Grid>
            {/* Cuarta columna */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {persons
                .filter((item: any) => item.id === 7) // Filtrar la última card
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    isSpecialCard={true}
                  />
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardsGrid
