import React from 'react'
import {
  Box,
  Container,
  Typography
} from '@mui/material'
import './CallToActionContactForm.styles.css'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../atom/PrimaryButton.tsx'


interface ImageWithTextProps {
  imageUrl: string
  textPosition: "left" | "right"
}

const CallToActionContactForm: React.FC<ImageWithTextProps> = ({
  imageUrl,
  textPosition,
}) => {
  return (
    <Container maxWidth="lg" className={`image-with-text ${textPosition}`}>
      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <img src={imageUrl} alt="Imagen" className="image-container" />
        <Box
          sx={styleBox}
          className={(textPosition === 'left') ? 'box-position-left' : 'box-position-right'}
        >
          {textPosition === "left" ? (
            <>
              <Typography align="left" variant="body1">¿Tenés una propiedad que <strong>comercializar</strong> ?</Typography>
              <Link to={"/contact"}><PrimaryButton text={"Contactanos"} /></Link>
            </>
          ) : (
            <>
              <Typography align="left" variant="body1">¿Estás buscando <strong>invertir en un desarrollo inmobiliario</strong>?</Typography>
              <Link to={"/contact"}><PrimaryButton text={"Contactanos"} /> </Link>
            </>
          )}
        </Box>
      </Box>
    </Container >

  );
};

export default CallToActionContactForm;

const styleBox = {
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