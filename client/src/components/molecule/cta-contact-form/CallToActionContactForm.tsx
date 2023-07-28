import React from 'react'
import {
  Box,
  Container,
  Typography
} from '@mui/material'
import './CallToActionContactForm.styles.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../atom/PrimaryButton.tsx'
import { stylesCallToActionContactForm } from './CallToActionContactForm.styles.ts'

interface ImageWithTextProps {
  imageUrl: string
  textPosition: "left" | "right"
}

const CallToActionContactForm: React.FC<ImageWithTextProps> = ({
  imageUrl,
  textPosition,
}) => {
  return (
    <Container maxWidth="lg" className={ `image-with-text ${ textPosition }` } >
      <Box sx={ { position: 'relative', display: 'flex', justifyContent: 'center', padding: '1rem 0rem' } }>
        <img src={ imageUrl } alt="Imagen" className="image-container" />
        <Box
          sx={ stylesCallToActionContactForm.box }
          className={ (textPosition === 'left') ? 'box-position-left' : 'box-position-right' }
        >
          { textPosition === "left" ? (
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
  )
}

export default CallToActionContactForm;
