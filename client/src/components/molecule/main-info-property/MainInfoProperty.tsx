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
  forRent: boolean
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
  forRent,
  forSale
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const formatedPrice = price.toLocaleString("es-AR", { useGrouping: true })
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs('2022-04-17'))
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
        <Grid item xs={ 10 } sm={ 6 } md={ 5 } sx={ styles.titles }>
          <Typography variant="h2" sx={ { paddingBottom: '0.5rem' } }>
            { address }
          </Typography>
          <Typography variant="h3" sx={ { fontWeight: '500' } }>
            { name }
          </Typography>
        </Grid>
        <Grid item xs={ 12 } >
          <Paper
            elevation={ 8 }
            sx={ styles.boxContainer }
          >
            <Grid container className="paper-container">
              <Grid
                item
                xs={ 12 }
                sm={ 8 }
                md={ 9 }
                sx={ {
                  marginBottom: '1rem',
                  maxHeight: '560px'
                } }
                className="container-sliders"
              >
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
              <Grid
                item
                xs={ 12 }
                sm={ 4 }
                md={ 3 }
                sx={ styles.propertySummary }
                className="container-photos"
              >
                <Box>
                  <Typography
                    variant='h4'
                    sx={ {
                      textTransform: 'uppercase',
                      fontSize: '14px',
                      fontWeight: '700',
                      display: { 
                        xs: 'none', 
                        sm: 'none', 
                        md: 'block' 
                      },
                      marginBottom: '10px'
                    } }
                  >
                    Precio de {forRent === true? 'alquiler': 'venta'}
                  </Typography>
                  <Typography
                    variant='h4'
                    color='primary'
                    align='left'
                    sx={{fontWeight: '800'}}
                  >
                    {forRent === true? 'ARS': 'USD'} { formatedPrice }
                  </Typography>
                  <Typography
                    variant='h4'
                    sx={ {
                      fontSize: '14px',
                      display: { xs: 'none', sm: 'none', md: 'block' },
                      marginTop: '2.75rem'
                    } }
                  >
                    Esta propiedad ofrece
                  </Typography>
                  <Typography sx={ { margin: '1rem 1rem 1rem 0rem' } }>
                    <span className="detail"><AreaIcon /> { totalArea } m2 totales </span><span className="detail"><BedRoomIcon /> { bedrooms } dormitorios </span><span className="detail"><BathRoomIcon /> { bathrooms } baños </span><span className="detail"><GarageIcon /> { garage } cocheras </span> { garden && <span className="detail"><GardenIcon /> jardín</span> }
                  </Typography>
                </Box>
                <Box>
                  <PrimaryButton
                    text="Realizar consultar"
                    sx={ {
                      minWidth: '140px',
                      display: 'inline-block',
                      width: '100%'
                    } }
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
      <ConfirmationModal
        selectedDate={ selectedDate!! }
        openDialog={ openDialog }
        handleCloseDialog={ handleCloseDialog }
      />
    </>
  )
}

export default MainInfoProperty

const styles = {
  titles: {
    background: '#0C0C39',
    color: '#F5F5F5',
    padding: '0.75rem 0.75rem 0.75rem 1.25rem',
    borderRadius: '0.5rem 0.5rem 0rem 0rem'
  },
  boxContainer: {
    borderRadius: '0rem 0.5rem 0.5rem 0.5rem',
    padding: '0rem 0rem 1rem',
    marginBottom: '3rem'
  },
  imgList: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWwrap: 'wrap'
  },
  propertySummary: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWwrap: 'wrap',
    padding: '1rem'
  }
}