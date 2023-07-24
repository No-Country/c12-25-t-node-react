import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Grid,
  List,
  Typography,
} from '@mui/material'
import {
  City,
  EstateDetail,
  Operation,
  Room,
  Type
} from '../../../model/estate-detail'
import CityButtonGroup from '../../molecule/button-group/CityButtonGroup'
import OperationButtonGroup from '../../molecule/button-group/OperationButtonGroup'
import TypeButtonGroup from '../../molecule/button-group/TypeButtonGroup'
import RoomButtonGroup from '../../molecule/button-group/RoomButtonGroup'
import PrimaryButton from '../../atom/PrimaryButton'
import ListItemButtonOptions from '../../molecule/ListItemButtonOptions'
import CardsWithPagination from '../CardsWithPagination'

type SearchResultsProps = {
  results: EstateDetail[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results
}) => {
  const [searchResults, setSearchResults] = useState<EstateDetail[]>(results)

  const [selectedOperation, setSelectedOperation] = useState<Operation | null>(null)
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [selectedType, setSelectedType] = useState<Type | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const handleOperationChange = (operation: Operation) => setSelectedOperation(operation)
  const handleCityChange = (city: City) => setSelectedCity(city)
  const handleTypeChange = (type: Type) => setSelectedType(type)
  const handleRoomChange = (room: Room) => setSelectedRoom(room)

  const selectedOperationText = selectedOperation === null ? '' : `: ${ selectedOperation }`
  const selectedCityText = selectedCity === null ? '' : `: ${ selectedCity }`
  const selectedTypeText = selectedType === null ? '' : `: ${ selectedType }`
  const selectedRoomText = selectedRoom === null ? '' : `: ${ selectedRoom }`

  const handleClick = () => {
    console.log('handleClick: ', selectedOperation, selectedCity, selectedType, selectedRoom)
    if (selectedOperation !== null) {
      if (selectedOperation === 'Compra') {
        const compra = results.filter(result => result.for_sale === true)
        setSearchResults(compra)
        console.log('COMPRA: ', searchResults)
      } else {
        const alquiler = results.filter(result => result.for_rent === true)
        setSearchResults(alquiler)
        console.log('ALQUILER ', searchResults)
      }
    }
  }

  useEffect(() => {
    console.log('DESDE  USEEFFECT: ', selectedOperation)
  }, [selectedOperation])

  return (
    <>
      <Container maxWidth='lg'>
        <List 
          sx={ styles.list }
          component="nav"
          aria-labelledby="Menu de filtro para búsqueda de propiedad"
        >
          <ListItemButtonOptions textToDisplay={ `Operación ${ selectedOperationText }` } >
            <OperationButtonGroup selectedOperation={ selectedOperation } onOperationChange={ handleOperationChange } />
          </ListItemButtonOptions>
          <ListItemButtonOptions textToDisplay={ `Ubicación ${ selectedCityText }` } >
            <CityButtonGroup selectedCity={ selectedCity } onCityChange={ handleCityChange } />
          </ListItemButtonOptions>
          <ListItemButtonOptions textToDisplay={ `Inmueble ${ selectedTypeText }` } >
            <TypeButtonGroup selectedType={ selectedType } onTypeChange={ handleTypeChange } />
          </ListItemButtonOptions>
          <ListItemButtonOptions textToDisplay={ `Dormitorios ${ selectedRoomText }` } >
            <RoomButtonGroup selectedRoom={ selectedRoom } onRoomChange={ handleRoomChange } />
          </ListItemButtonOptions>
          <PrimaryButton
            text='Buscar'
            aria-label='Buscar propiedad'
            sx={ { margin: '1rem', padding: '6px 12px' } }
            onClick={ handleClick }
          />
        </List>
        {/* Mostrar total */ }
        <Grid container>
          <Grid item xs={ 12 }>
            <Typography sx={ styles.totalList } >
              <Box component='span' sx={ styles.totalListSpan } >{ searchResults.length }</Box>  inmuebles
            </Typography>
          </Grid>
        </Grid>
        {/* Cards with pagination*/ }
        <CardsWithPagination list={searchResults}/>
      </Container >
    </>
  )
}

export default SearchResults

const styles = {
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    bgcolor: 'background.paper',
    position: 'relative',
    top: '-50px',
    borderRadius: '7px',
    boxShadow: '0px 4px 10px grey'
  }, 
  totalList: {
    color: 'var(--primary-darker)',
    fontWeight: '500'
  },
  totalListSpan: {
    color: 'var(--primary-light)',
    fontWeight: '800',
    letterSpacing: '1px'
  }
}