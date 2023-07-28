import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Snackbar,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import FeaturedCard from '../../molecule/FeaturedCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PrimaryButton from '../../atom/PrimaryButton'
import { EstateDetail } from '../../../model/estate-detail'
import SkeletonMessage from '../../atom/SkeletonMessage'
import { useEstateDetails } from '../../../store/database'
import { stylesFeaturedAcordion } from './FeaturedAcordion.styles'
import { useSpinner } from '../../../context/SpinnerProvider'
import './FeaturedAcordion.css'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={ 6 } ref={ ref } variant="filled" { ...props } />
})

interface FeaturedAcordionProps {
  textTitle: string
  estates?: EstateDetail[] | any[]
}

const FeaturedAcordion: React.FC<FeaturedAcordionProps> = ({
  textTitle,
  estates
}) => {
  const { addLoading, removeLoading } = useSpinner()
  const { estateDetails, open, setOpen, getEstateDetails } = useEstateDetails()
  useEffect(() => {
    addLoading()
    getEstateDetails()
    removeLoading()
  }, [])
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  let maxSlides
  textTitle === 'alquiler' ? (maxSlides = 4) : (maxSlides = 3)

  const filteredEstates = estateDetails.filter(
    (estate) =>
      (textTitle === 'venta' && estate.for_sale && estate.is_featured) ||
      (textTitle === 'alquiler' && estate.for_rent && estate.is_featured)
  )

  const navigate = useNavigate()
  const handleClick = () => navigate('/search')

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <Container maxWidth="lg" sx={ { marginTop: isMd ? '10rem' : '6rem' } }>
      <Box sx={ stylesFeaturedAcordion.box }>
        <Typography variant="h2" sx={ { alignSelf: 'center' } }>
          Destacados en<span style={ { fontWeight: '800' } }> { textTitle }</span>
        </Typography>
        <PrimaryButton
          text="Ver todos"
          variant="outlined"
          sx={ stylesFeaturedAcordion.button }
          onClick={ handleClick }
        />
      </Box>
      {/* { estateDetails.length === 0 ? ( */ }
      { estates?.length === 0 ? (
        <SkeletonMessage messageText="Sin propiedades destacadas para mostrar" />
      ) : (
        <Swiper
          navigation={ true }
          modules={ [Navigation] }
          slidesPerView={ 1 }
          spaceBetween={ 10 }
          centeredSlides={ false }
          breakpoints={ {
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
          } }
          className="mySwiper-appartamentos"
        >
          {
            // filteredEstates.map((estate) => (
            estates?.map((estate) => (
              <SwiperSlide
                key={ estate.estate_datail_id }
                style={ { paddingBottom: '20px' } }
              >
                <FeaturedCard estate={ estate } />
              </SwiperSlide>
            ))

          }

        </Swiper>
      ) }
      <Stack spacing={ 2 } sx={ { width: '100%' } }>
        <Snackbar open={ open } autoHideDuration={ 6000 } onClose={ handleClose }>
          <Alert onClose={ handleClose } severity="error" sx={ { width: '100%' } }>
            Error al obtener los detalles de las propiedades
          </Alert>
        </Snackbar>
      </Stack>
    </Container>
  )
}

export default FeaturedAcordion
