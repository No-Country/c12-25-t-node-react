import FeaturedCard from '../../molecule/FeaturedCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Button, Typography } from '@mui/material'
import './featuredForSaleAcordion.styles.css'

const FeaturedForSaleAcordion = () => {
  return (
    <section className="featured-for-sale-acordion">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" component="p" sx={{ alignSelf: 'center' }}>
          <span style={{ fontWeight: 'normal' }}>Destacados</span>
          <span style={{ fontWeight: 'bold' }}> en venta</span>
        </Typography>
        <Button
          variant="outlined"
          sx={{
            display: 'inline-block',
            paddingY: 0.5,
            paddingX: 1,
            fontSize: '0.8rem',
            borderRadius: 3,
          }}
        >
          Ver todos
        </Button>
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
