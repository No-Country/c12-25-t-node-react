import {
  Box,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import KingBedIcon from '@mui/icons-material/KingBed'
import PoolIcon from '@mui/icons-material/Pool'
import BathtubIcon from '@mui/icons-material/Bathtub'
import ChairIcon from '@mui/icons-material/Chair'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import ParkIcon from '@mui/icons-material/Park'
import RoomServiceIcon from '@mui/icons-material/RoomService'
import CropSquareIcon from '@mui/icons-material/CropSquare'
import WorkIcon from '@mui/icons-material/Work'
import SavingsIcon from '@mui/icons-material/Savings'
import FireplaceIcon from '@mui/icons-material/Fireplace'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import DeckIcon from '@mui/icons-material/Deck'
import BalconyIcon from '@mui/icons-material/Balcony'
import SoapIcon from '@mui/icons-material/Soap'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import Subtitle from '../../atom/Subtitle'
import Text from '../text/Text'

type DetailPropertyProps = {
  totalArea: number
  coveredArea: number
  bedrooms: number
  bathrooms: number
  toilette: number
  balcony: number
  garage: number
  sum: number
  swimmingPool: number
  years: number
  gym: number
  grill: number
  garden: boolean
  terrance: boolean
  creditWorthy: boolean
  professionalUse: boolean
  rooms: object
  description: string[]
  zone: string[]
  services: string[]
}

const DetailProperty: React.FC<DetailPropertyProps> = ({
  totalArea,
  coveredArea,
  bedrooms,
  bathrooms,
  toilette,
  balcony,
  garage,
  swimmingPool,
  sum,
  gym,
  years,
  garden,
  terrance,
  grill,
  creditWorthy,
  professionalUse,
  description,
  zone,
  services,
  rooms
}) => {
  const roomArray = Object.entries(rooms).filter(([room, count]) => count !== 0).map(([room, count]) => `${ count } ${ room }`)

  return (
    <>
      <Subtitle title="La propiedad" fontWeight="600" />
      <Text textToShow={ description } paddingText="16px 16px 0px" />
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } md={ 3 }>
          <Subtitle title="La zona" fontWeight="600" />
          <Text textToShow={ zone } paddingText="16px 16px 0px" />
        </Grid>
        <Grid item xs={ 12 } md={ 9 }>
          <Paper
            elevation={ 8 }
            sx={ {
              borderRadius: '1rem',
              padding: '1rem 1rem 1.75rem',
              marginTop: '1rem'
            } }
          >
            <Grid container spacing={ 1 }>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><CropSquareIcon color="secondary" /> { totalArea } m2 totales</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><CropSquareIcon color="secondary" /> { coveredArea } m2 cubiertos</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><KingBedIcon color="secondary" /> { bedrooms } dormitorios</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><BathtubIcon color="secondary" /> { bathrooms } baños</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><SoapIcon color="secondary" /> toilet: { toilette === 0 ? 'no' : `${ toilette }` }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><BalconyIcon color="secondary" /> balcón: { balcony === 0? 'no': `${balcony}` }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><TimeToLeaveIcon color="secondary" /> cochera: { garage === 0 ? 'no' : `${ garage }` } </Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><ParkIcon color="secondary" /> jardín: { garden ? 'si' : 'no' }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><PoolIcon color="secondary" /> pileta: { swimmingPool === 0 ? 'no' : `${ swimmingPool }` } </Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><DeckIcon color="secondary" /> terraza: { terrance ? 'si' : 'no' }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><WarehouseIcon color="secondary" /> SUM: { sum === 0 ? 'no' : 'si' }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><FitnessCenterIcon color="secondary" /> gimnasio: { gym === 0 ? 'no' : `${gym}`}</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><FireplaceIcon color="secondary" /> parrilla: { grill === 0 ? 'no' : `${ grill }` }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><CalendarMonthIcon color="secondary" /> { years } años</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><WorkIcon color="secondary" /> apto profesional: { professionalUse ? 'si' : 'no' }</Typography>
              </Grid>
              <Grid item xs={ 6 } md={ 3 }>
                <Typography fontSize={ 12 }><SavingsIcon color="secondary" /> apto crédito: { creditWorthy ? 'si' : 'no' }</Typography>
              </Grid>
            </Grid>
            <Typography sx={ { padding: '1rem 0rem 0.5rem' } }><RoomServiceIcon color="secondary" /> Servicios</Typography>
            {
              services && <Typography sx={ styles.services }>
                { services.map(service => <Box component="span" sx={ { paddingRight: '1rem' } } key={ service }>{ service }</Box>) }
              </Typography>
            }
            <Typography sx={ { paddingTop: '1rem' } }><ChairIcon color="secondary" /> Ambientes</Typography>
            {
              roomArray && <Typography sx={ styles.services }>
                { roomArray.map(room => <Box component="span" sx={ { paddingRight: '1rem' } } key={ `12-${ room }` }>{ room }</Box>) }
              </Typography>
            }
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default DetailProperty

const styles = {
  services: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: '12px'
  }
}