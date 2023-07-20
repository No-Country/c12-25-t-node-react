import {
  Box,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import Subtitle from '../../atom/Subtitle'
import Text from '../text/Text'
import { AreaIcon, BalconyWindowIcon, BathRoomIcon, BedRoomIcon, BriefcaseIcon, CreditWorthyIcon, GarageIcon, GardenIcon, GrillIcon, GymIcon, RoomSofaIcon, SUMIcon, ServicesIcon, SwimmingPoolIcon, TerranceIcon, ToileteIcon, YearsIcon } from '../../atom/Icons'

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
        <Grid item xs={ 12 } md={ 4 }>
          <Subtitle title="La zona" fontWeight="600" />
          <Text textToShow={ zone } paddingText="16px 16px 0px" />
        </Grid>
        <Grid item xs={ 12 } md={ 8 }>
          <Paper
            elevation={ 8 }
            sx={ {
              borderRadius: '1rem',
              padding: '1rem 1rem 1.75rem',
              marginTop: '1rem'
            } }
          >
            <Grid container spacing={ 1 }>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><AreaIcon /> { totalArea } m2 totales</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><AreaIcon /> { coveredArea } m2 cubiertos</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><BedRoomIcon /> { bedrooms } dormitorios</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><BathRoomIcon /> { bathrooms } baños</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><ToileteIcon /> toilet: { toilette === 0 ? 'no' : `${ toilette }` }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><BalconyWindowIcon /> balcón: { balcony === 0 ? 'no' : `${ balcony }` }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><GarageIcon /> cochera: { garage === 0 ? 'no' : `${ garage }` } </Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><GardenIcon /> jardín: { garden ? 'si' : 'no' }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><SwimmingPoolIcon /> pileta: { swimmingPool === 0 ? 'no' : `${ swimmingPool }` } </Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><TerranceIcon /> terraza: { terrance ? 'si' : 'no' }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><SUMIcon /> SUM: { sum === 0 ? 'no' : 'si' }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><GymIcon /> gimnasio: { gym === 0 ? 'no' : `${ gym }` }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><GrillIcon /> parrilla: { grill === 0 ? 'no' : `${ grill }` }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><YearsIcon /> { years } años</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><BriefcaseIcon /> apto profesional: { professionalUse ? 'si' : 'no' }</Typography>
              </Grid>
              <Grid item xs={ 6 } sm={ 4 } md={ 3 }>
                <Typography fontSize={ 12 }><CreditWorthyIcon /> apto crédito: { creditWorthy ? 'si' : 'no' }</Typography>
              </Grid>
            </Grid>
            <Typography sx={ { padding: '1rem 0rem 0.5rem' } }><ServicesIcon /> Servicios</Typography>
            {
              services && <Typography sx={ styles.services }>
                { services.map(service => <Box component="span" sx={ { paddingRight: '1rem' } } key={ service }>{ service }</Box>) }
              </Typography>
            }
            <Typography sx={ { paddingTop: '1rem' } }><RoomSofaIcon /> Ambientes</Typography>
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