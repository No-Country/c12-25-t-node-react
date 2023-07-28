import { useNavigate } from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'
import cajas from '../assets/not-found.png'
import Subtitle from '../components/atom/Subtitle'
import PrimaryButton from '../components/atom/PrimaryButton'

type NotFoundProps = {

}

const NotFound: React.FC<NotFoundProps> = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/')
  return (
    <main>
      <Container maxWidth="lg" sx={ styles.mainContainer } >
        <Grid container>
          <Grid
            item
            xs={ 12 }
            sm={ 6 }
            sx={ { paddingBottom: '1.75rem' } }
          >
            <Subtitle
              title="¡Ups! Parece que se mudaron"
              padding="1rem 0rem"
              fontWeight="700"
            />
            <Typography
              sx={ { paddingBottom: '1.5rem', fontSize: '20px' } }
            >
              La página que estás buscando no se encuentra disponible.
            </Typography>
            <Typography
              sx={ { paddingBottom: '0.25rem', fontWeight: '800' } }
            >
              Código de error: 404
            </Typography>
            <Typography
              sx={ { padding: '0rem 0rem 1.5rem 0rem', maxWidth: '380px' } }
            >
              La buena noticia es que aún contamos con miles de propiedades que sí están disponibles para vos.
            </Typography>
            <PrimaryButton text="Volver al inicio" onClick={ handleClick } />
          </Grid>
          <Grid
            item
            xs={ 12 }
            sm={ 6 }
            sx={ { padding: '1rem' } }
          >
            <img src={ cajas } alt="cajas de mudanza" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default NotFound

const styles = {
  mainContainer: {
    marginTop: '6rem',
    minHeight: { sm: '60vh', lg: '70vh' },
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
}