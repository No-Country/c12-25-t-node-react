import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Box, Button, Typography } from '@mui/material'
import './featuredForRentAcordion.styles.css'
import FeaturedCard from '../../molecule/FeaturedCard'
// type FeaturedForSaleAcordionProps = {
// };

const FeaturedForRentAcordion = () => {
  return (
    <section className="featured-for-rent-acordion">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2,
        }}
      >
        <Typography variant="h4" component="p" sx={{ alignSelf: 'center' }}>
          <span style={{ fontWeight: 'normal' }}>Destacados</span>
          <span style={{ fontWeight: 'bold' }}> en alquiler</span>
        </Typography>
        <Button variant="outlined" className="ver-todos-btn">
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
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

export default FeaturedForRentAcordion
