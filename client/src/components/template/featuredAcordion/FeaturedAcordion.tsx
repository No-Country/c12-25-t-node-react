import { useNavigate } from 'react-router-dom'
import { Box, Typography, Container } from '@mui/material'
import FeaturedCard from '../../molecule/FeaturedCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PrimaryButton from '../../atom/PrimaryButton'
import './featuredAcordion.styles.css'
import { EstateDetail, EstatesDetail } from '../../../model/estate-detail'
import { getAllEstateDetails } from '../../firebase/database';
import { useTheme, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'

interface FeaturedAcordionProps {
  textTitle: string
  estates?: EstateDetail[]
}

const FeaturedAcordion: React.FC<FeaturedAcordionProps> = ({
  textTitle,
}) => {
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const navigate = useNavigate()
  const handleClick = () => navigate('/search')
  let maxSlides
  textTitle === 'alquiler' ? (maxSlides = 4) : (maxSlides = 3)

  const [estateDetails, setEstateDetails] = useState<EstateDetail[]>([]);

  useEffect(() => {
    async function fetchEstateDetails() {
      try {
        const details = await getAllEstateDetails();
        setEstateDetails(details);
      } catch (error) {
        console.error('Error al obtener los detalles de las propiedades:', error);
      }
    }

    fetchEstateDetails();
  }, []);

  const filteredEstates = estateDetails.filter(
    (estate) =>
      (textTitle === 'venta' && estate.for_sale && estate.is_featured) ||
      (textTitle === 'alquiler' && estate.for_rent && estate.is_featured)
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: isMd ? '10rem' : '6rem' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Typography variant="h2" sx={{ alignSelf: 'center' }}>
          Destacados en<span style={{ fontWeight: '800' }}> {textTitle}</span>
        </Typography>
        <PrimaryButton
          text="Ver todos"
          variant="outlined"
          sx={{
            display: 'inline-block',
            paddingY: 0.5,
            paddingX: 1,
            fontSize: '0.8rem',
            borderRadius: 3,
            minWidth: '94px',
          }}
          onClick={handleClick}
        />
      </Box>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1130: {
            slidesPerView: maxSlides,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {filteredEstates.map((estate) => (
          <SwiperSlide key={estate.estate_datail_id} style={{ paddingBottom: '20px' }}>
            <FeaturedCard estate={estate} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default FeaturedAcordion
