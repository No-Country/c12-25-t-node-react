import { useState } from 'react'
import {
  Box,
  Collapse,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
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
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'



type SearchResultsProps = {
  results: EstateDetail[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results
}) => {
  console.log(results)
  const [value, setValue] = useState('1')

  const [selectedOperation, setSelectedOperation] = useState<Operation>(Operation.compra)
  const [selectedCity, setSelectedCity] = useState<City>(City.agromonia)
  const [selectedType, setSelectedType] = useState<Type>(Type.casa)
  const [selectedRoom, setSelectedRoom] = useState<Room>(Room.uno)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleOperationChange = (operation: Operation) => setSelectedOperation(operation)
  const handleCityChange = (city: City) => setSelectedCity(city)
  const handleTypeChange = (type: Type) => setSelectedType(type)
  const handleRoomChange = (room: Room) => setSelectedRoom(room)

  // Para probar con list
  const [open, setOpen] = useState(true)
  const handleClick = () => setOpen(!open)

  return (
    <>
      <Container maxWidth='lg'>
        {/* Buscador*/ }
          <List
            sx={ {
              width: '100%',
              display: 'flex',
              flexDirection: {xs: 'column', sm: 'row'},
              bgcolor: 'background.paper',
              position: 'relative',
              top: '-50px',
              borderRadius: '7px',
              boxShadow: '0px 4px 10px grey'
            } }
            component="nav"
            aria-labelledby="Menu de filtro para búsqueda de propiedad"
          >
            <ListItemButton
              onClick={ handleClick }
              sx={ {
                width: { xs: '100%', sm: '50%', md: '25%' }
              } }
            >
              <ListItemText primary="Operación" />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
              <OperationButtonGroup
                selectedOperation={ selectedOperation }
                onOperationChange={ handleOperationChange }
              />
            </Collapse>
            <ListItemButton
              onClick={ handleClick }
              sx={ {
                width: { xs: '100%', sm: '50%', md: '25%' }
              } }
            >
              <ListItemText primary="Ubicación" />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
              <CityButtonGroup
                selectedCity={ selectedCity }
                onCityChange={ handleCityChange }
              />
            </Collapse>
            <ListItemButton
              onClick={ handleClick }
              sx={ {
                width: { xs: '100%', sm: '50%', md: '25%' }
              } }
            >
              <ListItemText primary="Tipo de inmueble" />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
              <TypeButtonGroup
                selectedType={ selectedType }
                onTypeChange={ handleTypeChange }
              />
            </Collapse>
            <ListItemButton
              onClick={ handleClick }
              sx={ {
                width: { xs: '100%', sm: '50%', md: '25%' }
              } }
            >
              <ListItemText primary="Dormitorios" />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
              <RoomButtonGroup
                selectedRoom={ selectedRoom }
                onRoomChange={ handleRoomChange }
              />
            </Collapse>
            <ListItemButton
              onClick={ handleClick }
              sx={ {
                width: { xs: '100%', sm: '50%', md: '25%' }
              } }
            >
              <ListItemText primary="Amenities" />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
              amenities
            </Collapse>
            <ListItemButton
              onClick={ handleClick }
              sx={ {
                width: { xs: '100%', sm: '50%', md: '25%' }
              } }
            >
              <ListItemText primary="Precio" />
              { open ? <ExpandLess /> : <ExpandMore /> }
            </ListItemButton>
            <Collapse in={ open } timeout="auto" unmountOnExit>
              precio
            </Collapse>
          </List>
        {/* Mostrar total */ }
        <Grid container>
          <Grid item xs={ 12 }>
            <Typography
              sx={ {
                color: 'var(--primary-darker)',
                fontWeight: '500'
              } }
            >
              <Box component='span' sx={ {
                color: 'var(--primary-light)',
                fontWeight: '800',
                letterSpacing: '1px'
              } }
              >
                { results.length }
              </Box> inmuebles</Typography>
          </Grid>
        </Grid>
        {/* Cards */ }
        <Grid
          container
          sx={ {
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          } }
          className="featured-card-container"
        >
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
                sx={ {
                  margin: '8px 6px',
                  // display: 'flex',
                  // alignContent: 'center',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  // flexWrap: 'wrap'
                } }
                className="featured-card-item"
              >
                <FeaturedCard
                  estate={ estateCard }
                />
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
          <Stack
            spacing={ 2 }
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignContent: 'center',
              justifyContent: 'center',
            } }
          >
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