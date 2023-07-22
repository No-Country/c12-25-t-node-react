import { useState } from 'react'
import {
  Box,
  Container,
  Grid,
  List,
  Typography,
  Pagination,
  Stack
} from '@mui/material'
import {
  City,
  EstateDetail,
  Operation,
  Room,
  Type
} from '../../../model/estate-detail'
import FeaturedCard from '../../molecule/FeaturedCard'
import CityButtonGroup from '../../molecule/button-group/CityButtonGroup'
import OperationButtonGroup from '../../molecule/button-group/OperationButtonGroup'
import TypeButtonGroup from '../../molecule/button-group/TypeButtonGroup'
import RoomButtonGroup from '../../molecule/button-group/RoomButtonGroup'
import PrimaryButton from '../../atom/PrimaryButton'
import ListItemButtonOptions from '../../molecule/ListItemButtonOptions'

type SearchResultsProps = {
  results: EstateDetail[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results
}) => {
  console.log(results) // TODO: borrar!!!
  const [selectedOperation, setSelectedOperation] = useState<Operation>(Operation.compra)
  const [selectedCity, setSelectedCity] = useState<City>(City.agromonia)
  const [selectedType, setSelectedType] = useState<Type>(Type.casa)
  const [selectedRoom, setSelectedRoom] = useState<Room>(Room.uno)

  const handleOperationChange = (operation: Operation) => setSelectedOperation(operation)
  const handleCityChange = (city: City) => setSelectedCity(city)
  const handleTypeChange = (type: Type) => setSelectedType(type)
  const handleRoomChange = (room: Room) => setSelectedRoom(room)

  return (
    <>
      <Container maxWidth='lg'>
        {/* Buscador*/ }
        <List
          sx={ {
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            bgcolor: 'background.paper',
            position: 'relative',
            top: '-50px',
            borderRadius: '7px',
            boxShadow: '0px 4px 10px grey'
          } }
          component="nav"
          aria-labelledby="Menu de filtro para búsqueda de propiedad"
        >
          <ListItemButtonOptions textToDisplay={ `Operación: ${ selectedOperation }` } >
            <OperationButtonGroup selectedOperation={ selectedOperation } onOperationChange={ handleOperationChange } />
          </ListItemButtonOptions>
          <ListItemButtonOptions textToDisplay={ `Ubicación: ${ selectedCity }` } >
            <CityButtonGroup selectedCity={ selectedCity } onCityChange={ handleCityChange } />
          </ListItemButtonOptions>
          <ListItemButtonOptions textToDisplay={ `Tipo de inmueble: ${ selectedType }` } >
            <TypeButtonGroup selectedType={ selectedType } onTypeChange={ handleTypeChange } />
          </ListItemButtonOptions>
          <ListItemButtonOptions textToDisplay={ `Dormitorios: ${ selectedRoom }` } >
            <RoomButtonGroup selectedRoom={ selectedRoom } onRoomChange={ handleRoomChange } />
          </ListItemButtonOptions>
          <PrimaryButton
            text='Buscar'
            aria-label='Buscar propiedad'
            sx={ { margin: '1rem', padding: '6px 12px' } }
          />
        </List>
        {/* Mostrar total */ }
        <Grid container>
          <Grid item xs={ 12 }>
            <Typography sx={ styles.totalList } >
              <Box component='span' sx={ styles.totalListSpan } >{ results.length }</Box>
              inmuebles
            </Typography>
          </Grid>
        </Grid>
        {/* Cards */ }
        <Grid container sx={ styles.cardContainer } className="featured-card-container" >
          { results && results.map((result, index) => {
            const estateCard = {
              id: result.estate_datail_id.toString(),
              description: result.name,
              adress: result.address,
              area: result.uncovered_area,
              bedrooms: result.bedrooms,
              bathrooms: result.bathrooms,
              cars: result.garage,
              image: result.estate_photos[0].url,
              alt: result.estate_photos[0].alt,
              forRent: result.for_rent,
              forSale: result.for_sale
            }
            return (
              <Grid
                item
                xs={ 12 }
                sm={ 4 }
                md={ 3 }
                key={ `result-${ index }` }
                sx={ { margin: '8px 6px' } }
                className="featured-card-item"
              >
                <FeaturedCard estate={ estateCard } />
              </Grid>
            )
          }
          ) }
        </Grid>
        <Grid
          item
          xs={ 12 }
          sx={ { padding: '2rem 0.5rem 4rem' } }
        >
          <Stack spacing={ 2 } sx={ styles.stack } >
            <Pagination
              count={ 6 }
              variant="outlined"
              shape="rounded"
              size="large"
            />
          </Stack>
        </Grid>
      </Container >
    </>
  )
}

export default SearchResults

const styles = {
  totalList: {
    color: 'var(--primary-darker)',
    fontWeight: '500'
  },
  totalListSpan: {
    color: 'var(--primary-light)',
    fontWeight: '800',
    letterSpacing: '1px'
  },
  cardContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stack: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  }
}