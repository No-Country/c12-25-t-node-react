import React from 'react'
import './CallToActionContactForm.styles.css'
import {Link} from 'react-router-dom'
import PrimaryButton from '../../atom/PrimaryButton.tsx'
import {Box, styled, Typography} from '@mui/material'

interface ImageWithTextProps {
  imageUrl: string;
  textPosition: "left" | "right";
}

const CallToActionContactForm: React.FC<ImageWithTextProps> = ({
  imageUrl,
  textPosition,
}) => {
  const ImageContainer = styled("img")({
    width: "75%",
    height: "auto",
  });

  const TextContainer = styled(Box)(({ textPosition }: { textPosition: string }) => ({
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    padding: '10px 30px',
    width: '50%',
    height: '75%',
    display:'flex',
    flexDirection: 'column',
    gap: '25px',
    borderRadius: '20px',
    filter: 'drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.25))',
    top: '50%',
    transform: 'translateY(-50%)',
    ...(textPosition === 'left'
      ? {
        left: '0',
      }
      : {
        right: '0',
      }),
  }));

  return (
    <Box position="relative" className={`image-with-text ${textPosition}`}>
      <ImageContainer src={imageUrl} alt="Imagen" />
        <TextContainer textPosition={textPosition}>
          {textPosition === "left" ? (
            <>
             <Typography align="left" variant="body1">¿Tenés una propiedad que <strong>comercializar</strong> ?</Typography>
              <Link to={"/contact"}>
                <PrimaryButton text={"Contactanos"}></PrimaryButton>
              </Link>
            </>
          ) : (
            <>
              <Typography align="left" variant="body1">¿Estás buscando <strong>invertir en un desarrollo inmobiliario</strong>?</Typography>
              <Link to={"/contact"}>
                <PrimaryButton text={"Contactanos"}></PrimaryButton>
              </Link>
            </>
          )}
        </TextContainer>
    </Box>

  );
};

export default CallToActionContactForm;