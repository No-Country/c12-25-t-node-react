import { useNavigate } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import FeaturedCard from '../../molecule/FeaturedCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PrimaryButton from '../../atom/PrimaryButton'
import './featuredForSaleAcordion.styles.css'

const FeaturedForSaleAcordion = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate('/search')

  return (
    <section className="featured-for-sale-acordion">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Typography variant="h2"  sx={{ alignSelf: 'center' }}>
          Destacados <span style={{ fontWeight: '800' }}> en venta</span>
        </Typography>
        <PrimaryButton
          text="Ver todos"
          variant="outlined"
          sx={ {
            display: 'inline-block',
            paddingY: 0.5,
            paddingX: 1,
            fontSize: '0.8rem',
            borderRadius: 3,
          } }
          onClick={ handleClick}
        />
      </Box>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{ paddingBottom: '10px' }}>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
        <SwiperSlide>
          <FeaturedCard />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default FeaturedForSaleAcordion
