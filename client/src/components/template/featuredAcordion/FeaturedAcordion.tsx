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
import { Estates } from '../../../pages/Home'

interface FeaturedAcordionProps {
  textTitle: string
  estates?: Estates[]
}

const FeaturedAcordion: React.FC<FeaturedAcordionProps> = ({
  textTitle,
  estates,
}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/search')
  let maxSlides = 0
  if (textTitle === 'alquiler') maxSlides = 4
  else maxSlides = 3
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
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
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1130: {
            slidesPerView: maxSlides,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {estates &&
          estates.map((estate) => (
            <SwiperSlide key={estate.id} style={{ paddingBottom: '10px' }}>
              <FeaturedCard estate={estate} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  )
}

export default FeaturedAcordion
