import { Container, Grid } from '@mui/material'
import CardsAbout from './CardsAbout'
import persons from '../../../api/personal.json'

const CardsGrid = () => {
  return (
    <Container maxWidth="xl">


      <Grid container spacing={2}>
        {/* Primera columna */}
        <Grid item xs={6} md={3}>
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
        <Grid item xs={6} md={3}>
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
        <Grid item xs={6} md={3}>
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
        <Grid item xs={12} md={3}>
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
    </Container>
  )
}

export default CardsGrid
