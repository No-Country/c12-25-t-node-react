import { useNavigate } from 'react-router-dom'
import {
  Grid,
  Paper,
  Typography
} from '@mui/material'
import { AreaIcon, BathRoomIcon, BedRoomIcon, GarageIcon, GardenIcon } from '../../atom/Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PrimaryButton from '../../atom/PrimaryButton'
import './MainInfoProperty.style.css'
import { EstatePhoto } from '../../../model/state-detail'

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

  return (
    <>
      <PrimaryButton
        text="<- Volver"
        variant="text"
        colorBtn="secondary"
        onClick={ handleClick }
      />
      <Grid container>
        <Grid item xs={ 10 } sm={ 6 } md={ 5 } sx={ styles.titles }>
          <Typography variant="h3">{ address }</Typography>
          <Typography>{ name }</Typography>
        </Grid>
        <Grid item xs={ 12 } >
          <Paper
            elevation={ 8 }
            sx={ styles.boxContainer }
          >
            <Grid container >
              <Grid item xs={ 12 } md={ 6 } lg={9} sx={ { marginBottom: '1rem' } }>
                <Swiper
                  navigation={ true }
                  modules={ [Navigation] }
                  slidesPerView={ 1 }
                  spaceBetween={ 10 }
                  centeredSlides={ true }
                >
                  { estatePhotos && estatePhotos.map(estatePhoto => (
                    <SwiperSlide
                      key={`estate-photo-${estatePhoto.state_photo_id}`}
                    >
                      <img src={estatePhoto.url} width="100%" height={260}/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
              <Grid item xs={ 12 } md={ 6 } lg={3} sx={ styles.imgList }>
                { estatePhotos.map(photo => <img
                  key={ `photo-${ photo.state_photo_id }` }
                  src={ photo.url }
                  style={ { width: '277px', height: '158px' } } />)
                }
              </Grid>
              <Grid item xs={ 12 } sm={ 8 } sx={ { marginTop: '1rem' } }>
                <Typography variant="h3" color="primary">USD { formatedPrice }</Typography>
                <Typography sx={ { margin: '1rem 1rem 1rem 0rem' } }><AreaIcon /> { totalArea } m2 totales <BedRoomIcon /> { bedrooms } dormitorios <BathRoomIcon /> { bathrooms } baños <GarageIcon /> { garage } cocheras { garden && <><GardenIcon /> jardín</> } </Typography>
              </Grid>
              <Grid item xs={ 12 } sm={ 4 } sx={ { marginTop: '1rem' } }>
                <PrimaryButton
                  text="Consultar"
                  sx={ styles.btnCta }
                />
                <PrimaryButton
                  text="Visitar"
                  variant="outlined"
                  sx={ styles.btnCta
                  } />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
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
  btnCta: {
    minWidth: '160px',
    margin: '0rem 1rem 1rem 0rem'
  },
  boxContainer: {
    borderRadius: '0rem 0.5rem 0.5rem 0.5rem',
    padding: '0rem 1rem 1rem 1rem',
    marginBottom: '3rem'
  },
  imgList: {
    display: { xs: 'none', sm: 'flex' },
    flexDirection: 'column',
    alignContent: 'flex-end',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexWwrap: 'wrap'
  }
}