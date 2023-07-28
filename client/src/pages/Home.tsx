import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import Searcher from '../components/Searcher.tsx'
import { estatesDetailList } from '../utils/EstatesDetailsList.ts'
import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { Link } from 'react-router-dom'
import PrimaryButton from '../components/atom/PrimaryButton.tsx'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const filteredForSaleEstates = estatesDetailList.filter(
    (estate) => (estate.for_sale && estate.is_featured)
  )

  const filteredForRentEstates = estatesDetailList.filter(
    (estate) => (estate.for_rent && estate.is_featured)
  )

  return (
    <main>
      <Grid
        sx={ {
          height: '50vh',
          backgroundImage: `url(${ './assets/heroImage.png' })`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        } }
      />
      <Searcher />
      <FeaturedAcordion textTitle="venta" estates={ filteredForSaleEstates } />
      <FeaturedAcordion textTitle="alquiler" estates={ filteredForRentEstates } />
      <Container maxWidth="lg" className={ `image-with-text-left` } sx={{minHeight: '300px'}}>
        <Box sx={ { position: 'relative', display: 'flex', justifyContent: 'center', padding: '1rem 0rem' } }>
          <img src='../assets/imageCtaRight.png' alt="Imagen" className="image-container" />
          <Box
            sx={
              {
                position: 'absolute',
                top: '30%',
                backgroundColor: '#f9f9f9',
                zIndex: 2,
                padding: '20px 30px',
                width: '46%',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                borderRadius: '20px',
                filter: 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))',
              }
            }
            className={ ('left' === 'left') ? 'box-position-left' : 'box-position-right' }
          >
            { 'left' === "left" ? (
              <>
                <Typography align="left" variant="body1">
                  ¿Tenés una propiedad que <strong>comercializar</strong> ?
                </Typography>
                <Link to="/contact" aria-label="pagina de contacto">
                  <PrimaryButton text="Contactanos" />
                </Link>
              </>
            ) : (
              <>
                <Typography align="left" variant="body1">
                  ¿Estás buscando <strong>invertir en un desarrollo inmobiliario</strong>?
                </Typography>
                <Link to="/contact" aria-label="pagina de contacto">
                  <PrimaryButton text="Contactanos" />
                </Link>
              </>
            ) }
          </Box>
        </Box>
      </Container >
    </main>
  )
}

export default Home
