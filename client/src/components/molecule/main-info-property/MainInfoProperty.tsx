import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PrimaryButton from '../../atom/PrimaryButton'
import './MainInfoProperty.style.css'
import { EstatePhoto } from '../../../model/state-detail'
import Subtitle from '../../atom/Subtitle'
import ConfirmationModal from '../confirmation-modal/ConfirmationModal'

type MainInfoPropertyProps = {
  redirectFromHome: string | null
  address: string
  name: string
  price: number
  totalArea: number
  bedrooms: number
  bathrooms: number
  garage: number
  garden: boolean
  estatePhotos: EstatePhoto[]
}

const MainInfoProperty: React.FC<MainInfoPropertyProps> = ({
  redirectFromHome,
  address,
  name,
  price,
  totalArea,
  bedrooms,
  bathrooms,
  garage,
  garden,
  estatePhotos
}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`${ redirectFromHome === 'true' ? '/' : 'search' }`)
  const formatedPrice = price.toLocaleString("es-AR", { useGrouping: true })
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs('2022-04-17'))
  const [openDialog, setOpenDialog] = useState(false)
  const handleConfirm = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)

  return (
    <>
      <PrimaryButton
        text="<- Volver"
        variant="text"
        colorBtn="secondary"
        onClick={ handleClick }
      />
      <Grid container className="container-hero-detail">
        <Grid item xs={ 10 } sm={ 6 } md={ 5 } sx={ styles.titles }>
          <Typography variant="h3">{ address }</Typography>
          <Typography>{ name }</Typography>
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
                md={ 8 }
                lg={ 9 }
                sx={ { marginBottom: '1rem' } }
                className="container-sliders"
              >
                <Swiper
                  navigation={ true }
                  modules={ [Navigation] }
                  slidesPerView={ 1 }
                  spaceBetween={ 10 }
                  centeredSlides={ true }
                >
                  { estatePhotos && estatePhotos.map(estatePhoto => (
                    <SwiperSlide
                      key={ `estate-photo-${ estatePhoto.estate_photo_id }` }
                    >
                      <img src={ estatePhoto.url } width="100%" height={ 320 } className="imgSlider" />
                    </SwiperSlide>
                  )) }
                </Swiper>
              </Grid>
              <Grid
                item
                xs={ 12 }
                md={ 4 }
                lg={ 3 }
                sx={ styles.imgList }
                className="container-photos"
              >
                { estatePhotos.map(photo => <img
                  key={ `photo-${ photo.estate_photo_id }` }
                  src={ photo.url }
                  style={ { width: '250px', height: 'auto' } } />)
                }
              </Grid>
              <Grid
                item xs={ 12 }
                sm={ 7 }
                md={ 8 }
                lg={ 9 }
                sx={ { marginTop: '1rem', padding: '1rem' } }
              >
                <Typography variant="h3" color="primary">USD { formatedPrice }</Typography>
                <Typography sx={ { margin: '1rem 1rem 1rem 0rem' } }>
                  <AreaIcon /> { totalArea } m2 totales <BedRoomIcon /> { bedrooms } dormitorios <BathRoomIcon /> { bathrooms } baños <GarageIcon /> { garage } cocheras { garden && <><GardenIcon /> jardín</> }
                </Typography>
              </Grid>
              <Grid item xs={ 12 } sm={ 5 } md={ 4 } lg={ 3 } sx={ styles.containerBtnCta }>
                <PrimaryButton
                  text="Consultar"
                  sx={ styles.btnCta }
                />
                <LocalizationProvider dateAdapter={ AdapterDayjs }>
                  <DemoContainer components={ ['MobileDatePicker'] }>
                    <MobileDatePicker
                      label="Agendar visita"
                      value={ selectedDate }
                      format='DD / MM / YYYY'
                      onChange={ (newValue) => setSelectedDate(newValue) }
                      onAccept={ handleConfirm }
                    />
                  </DemoContainer>
                </LocalizationProvider>
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
  link: {
    display: 'inline',
    lineHeight: '24px',
    fontSize: '18px',
    fontWeight: '700'
  },
  titles: {
    background: '#0C0C39',
    color: '#F5F5F5',
    padding: '0.5rem',
    borderRadius: '0.5rem 0.5rem 0rem 0rem'
  },
  containerBtnCta: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '0rem 1rem',
    gap: '1rem'
  },
  btnCta: {
    minWidth: '140px',
  },
  boxContainer: {
    borderRadius: '0rem 0.5rem 0.5rem 0.5rem',
    padding: '0rem 0rem 1rem',
    marginBottom: '3rem'
  },
  imgList: {
    display: { xs: 'none', sm: 'none', md: 'flex' },
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWwrap: 'wrap'
  }
}