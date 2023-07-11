import { Container, Grid, Typography } from '@mui/material'
import CardsAbout from './CardsAbout'
import persons from '../../../api/personal.json'

const CardsGrid = () => {

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', paddingBottom: '5rem', top: '-150px', position: 'relative' }}>
      <Typography variant="body1" sx={{ fontSize: '25px', padding: '20px 26px', textAlign: { lg: 'left', md: 'center', sm: 'center', xs: 'center' } }}>Comunicate con nuestro <strong>equipo</strong></Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="space-around">
            {/* First column */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={gridStyleAbout}>
              {persons
                .filter((item: any) => item.id <= 2)
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    whatsapp={item.whatsapp}
                    mail={item.mail}
                    isSpecialCard={false}
                  />
                ))}
            </Grid>
            {/* Second column */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={gridStyleAbout}>
              {persons
                .filter((item: any) => item.id > 2 && item.id <= 4)
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    whatsapp={item.whatsapp}
                    mail={item.mail}
                    isSpecialCard={false}
                  />
                ))}
            </Grid>
            {/* Third column */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={gridStyleAbout}>
              {persons
                .filter((item: any) => item.id > 4 && item.id <= 6)
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    whatsapp={item.whatsapp}
                    mail={item.mail}
                    isSpecialCard={false}
                  />
                ))}
            </Grid>
            {/* Fourth column */}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={2} sx={gridStyleAbout}>
              {persons
                .filter((item: any) => item.id === 7)
                .map((item: any) => (
                  <CardsAbout
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    lastName={item.lastName}
                    position={item.position}
                    whatsapp={item.whatsApp}
                    mail={item.mail}
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

const gridStyleAbout = {
  display: 'flex',
  flexDirection: { xs: 'row', sm: 'column' },
  justifyContent: 'center',
  alignItems: 'center'
}