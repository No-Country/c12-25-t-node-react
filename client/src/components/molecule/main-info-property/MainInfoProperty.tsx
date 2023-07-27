import { useState } from 'react'
import {
  Box,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { AreaIcon, BathRoomIcon, BedRoomIcon, GarageIcon, GardenIcon } from '../../atom/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'
import PrimaryButton from '../../atom/PrimaryButton'
import './MainInfoProperty.style.css'
import { EstatePhoto } from '../../../model/estate-detail'
import ConfirmationModal from '../confirmation-modal/ConfirmationModal'
import { stylesMainInfoProperty } from './MainInfoProperty.styles'

type MainInfoPropertyProps = {
  address: string
  name: string
  price: number
  totalArea: number
  bedrooms: number
  bathrooms: number
  garage: number
  garden: boolean
  estatePhotos: EstatePhoto[]
  forSale: boolean
}

const MainInfoProperty: React.FC<MainInfoPropertyProps> = ({
  address,
  name,
  price,
  totalArea,
  bedrooms,
  bathrooms,
  garage,
  garden,
  estatePhotos,
  forSale
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const formatedPrice = price.toLocaleString("es-AR", { useGrouping: true })
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs('2023-08-17'))
  const [openDialog, setOpenDialog] = useState(false)
  const handleConfirm = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)
  const handleClick = () => {
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Grid container className="container-hero-detail">
        <Grid item xs={ 10 } sm={ 6 } md={ 5 } sx={ stylesMainInfoProperty.titles }>
          <Typography variant="h2" sx={ { paddingBottom: '0.5rem' } }>{ address }</Typography>
          <Typography variant="h3" sx={ { fontWeight: '500' } }>{ name }</Typography>
        </Grid>
        <Grid item xs={ 12 } >
          <Paper elevation={ 8 } sx={ stylesMainInfoProperty.boxContainer } >
            <Grid container className="paper-container">
              <Grid item xs={ 12 } sm={ 8 } md={ 9 } sx={ stylesMainInfoProperty.containerSliders } className="container-sliders" >
                <Swiper
                  spaceBetween={ 10 }
                  navigation={ true }
                  thumbs={ { swiper: thumbsSwiper } }
                  modules={ [FreeMode, Navigation, Thumbs] }
                  className="mySwiper2"
                >
                  { estatePhotos && estatePhotos.map((estatePhoto, index) => (
                    <SwiperSlide
                      key={ `estate-photo-a-${ index }` }
                    >
                      <img
                        src={ estatePhoto.url }
                        width="100%"
                        height={ 320 }
                        className="imgSlider"
                        alt={ estatePhoto.alt ? estatePhoto.alt : 'inmueble' }
                      />
                    </SwiperSlide>
                  )) }
                </Swiper>
                <Swiper
                  //onSwiper={ setThumbsSwiper }
                  spaceBetween={ 10 }
                  slidesPerView={ 3 }
                  freeMode={ true }
                  watchSlidesProgress={ true }
                  modules={ [FreeMode, Navigation, Thumbs] }
                  className="mySwiper"
                >
                  { estatePhotos && estatePhotos.map((estatePhoto, index) => (
                    <SwiperSlide
                      key={ `estate-photo-a-${ index }` }
                    >
                      <img
                        src={ estatePhoto.url }
                        width="100%"
                        height={ 120 }
                        className="imgSlider"
                        alt={ estatePhoto.alt ? estatePhoto.alt : 'inmueble' }
                      />
                    </SwiperSlide>
                  )) }
                </Swiper>
              </Grid>
              <Grid item xs={ 12 } sm={ 4 } md={ 3 } sx={ stylesMainInfoProperty.propertySummary } className="container-photos" >
                <Box>
                  <Typography variant='h4' sx={ stylesMainInfoProperty.containerPhotos }>
                    Precio de {forSale === true? 'venta': 'alquiler'}
                  </Typography>
                  <Typography variant='h4' color='primary' align='left' sx={{fontWeight: '800'}} >
                    {forSale === true? 'USD':'ARS'} { formatedPrice }
                  </Typography>
                  <Typography variant='h4' sx={ stylesMainInfoProperty.subtitle } > Esta propiedad ofrece </Typography>
                  <Typography sx={ { margin: '1rem 1rem 1rem 0rem' } }>
                    <span className="detail"><AreaIcon /> { totalArea } m2 totales </span><span className="detail"><BedRoomIcon /> { bedrooms } dormitorios </span><span className="detail"><BathRoomIcon /> { bathrooms } baños </span><span className="detail"><GarageIcon /> { garage } cocheras </span> { garden && <span className="detail"><GardenIcon /> jardín</span> }
                  </Typography>
                </Box>
                <Box>
                  <PrimaryButton 
                    text="Realizar consulta"
                    className="consulta"
                    sx={ stylesMainInfoProperty.primaryButton }
                    onClick={ handleClick }
                  />
                  <LocalizationProvider dateAdapter={ AdapterDayjs }>
                    <DemoContainer components={ ['MobileDatePicker'] }>
                      <MobileDatePicker
                        label="Solicitar una visita"
                        value={ selectedDate }
                        format='DD / MM / YYYY'
                        onChange={ (newValue) => setSelectedDate(newValue) }
                        onAccept={ handleConfirm }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <ConfirmationModal selectedDate={ selectedDate!! } openDialog={ openDialog } handleCloseDialog={ handleCloseDialog } />
    </>
  )
}

export default MainInfoProperty
