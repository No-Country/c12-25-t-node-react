import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Container, Grid, List, Typography } from '@mui/material'
import { EstateDetail } from '../../../model/estate-detail'
import PrimaryButton from '../../atom/PrimaryButton'
import ListItemButtonOptions from '../../molecule/ListItemButtonOptions'
import CardsWithPagination from '../CardsWithPagination'
import MultipleSelect from '../../molecule/multiple-select/MultipleSelect'
import SearchIcon from '@mui/icons-material/Search'
import { stylesSearchResults } from './SearchResults.styles'
import { useSpinner } from '../../../context/SpinnerProvider'
import { useEstateDetails } from '../../../store/database'
import SkeletonMessage from '../../atom/SkeletonMessage'
import { useSnackbar } from 'notistack'
import { uniqueCities, uniqueTypeOfEstate } from '../../../utils/selectOptions'
import { estatesDetailList } from '../../../utils/EstatesDetailsList'

type SearchResultsProps = {}

const SearchResults: React.FC<SearchResultsProps> = ({ }) => {
  // get the query paramas, when the user comes from home search
  const [params] = useSearchParams()
  let operationParam = params.get('operation')
  let typeParam = params.get('type')
  let cityParam = params.get('city')
  const [hasParams, setHasParams] = useState<boolean>(false)

  const { enqueueSnackbar } = useSnackbar()
  const { addLoading, removeLoading } = useSpinner()
  const { estateDetails, getEstateDetails } = useEstateDetails()
  // State to store de states acording to the selected options
  const [searchResults, setSearchResults] = useState<EstateDetail[]>([])
  // States for the selected options
  const [selectedOperation, setSelectedOperation] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedRoom, setSelectedRoom] = useState<number[]>([])
  // State for the search button
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const cityOptions: string[] = uniqueCities
  const typeOptions: string[] = uniqueTypeOfEstate
  const bedroomsOptions: string[] = ['1', '2', '3', '4', '5', '6']
  useEffect(() => {
    // Set the list of states from Firebase and Zustand store
    addLoading()
    getEstateDetails()
    removeLoading()
    // Set the default values if the user comes from the HomePage, using the query params
    if (operationParam && operationParam === 'for_sale')
      setSelectedOperation(['Venta'])
    if (operationParam && operationParam === 'for_rent')
      setSelectedOperation(['Alquiler'])
    if (typeParam) setSelectedType(typeParam.split(','))
    if (cityParam) setSelectedCity(cityParam.split(','))
    if (operationParam && typeParam && cityParam) setHasParams(true)
  }, [])

  // onClick at the search button, the filter states are updated
  useEffect(() => {
    const filteredResults = estatesDetailList.filter((estate) => {
      const matchesOperation =
        selectedOperation.length === 0 ||
        (selectedOperation.includes('Alquiler') && estate.for_rent === true) ||
        (selectedOperation.includes('Venta') && estate.for_sale === true)
      const matchesCity =
        selectedCity.length === 0 || selectedCity.includes(estate.city)
      const matchesType =
        selectedType.length === 0 || selectedType.includes(estate.property_type)
      const matchesRoom =
        selectedRoom.length === 0 || selectedRoom.includes(estate.bedrooms)

      return matchesOperation && matchesCity && matchesType && matchesRoom
    })
    setSearchResults(filteredResults)

  }, [isSearching, hasParams, estateDetails])

  const handleClick = () => {
    enqueueSnackbar('Buscando propiedades...', { variant: 'success' })
    setIsSearching((isSearching) => !isSearching)
  }

  return (
    <>
      <Container maxWidth="lg">
        <List
          sx={ stylesSearchResults.list }
          component="nav"
          aria-labelledby="Menu de filtro para búsqueda de propiedad"
        >
          <ListItemButtonOptions>
            <MultipleSelect
              textToDisplay="Operación"
              listOptions={ ['Alquiler', 'Venta'] }
              options={ selectedOperation }
              setOptions={ setSelectedOperation }
            />
          </ListItemButtonOptions>
          <ListItemButtonOptions>
            <MultipleSelect
              textToDisplay="Ubicación"
              listOptions={ cityOptions }
              options={ selectedCity }
              setOptions={ setSelectedCity }
            />
          </ListItemButtonOptions>
          <ListItemButtonOptions>
            <MultipleSelect
              textToDisplay="Tipo de propiedad"
              listOptions={ typeOptions }
              options={ selectedType }
              setOptions={ setSelectedType }
            />
          </ListItemButtonOptions>
          <ListItemButtonOptions>
            <MultipleSelect
              textToDisplay="Dormitorios"
              listOptions={ bedroomsOptions }
              options={ selectedRoom }
              setOptions={ setSelectedRoom }
            />
          </ListItemButtonOptions>
          <PrimaryButton
            text="Buscar"
            aria-label="Buscar propiedad"
            icon={ <SearchIcon /> }
            textDisplay={ { xs: 'flex', md: 'none' } }
            sx={ stylesSearchResults.btnPrimary }
            onClick={ handleClick }
          />
        </List>
        {/* Mostrar total */ }
        <Grid container>
          <Grid item xs={ 12 }>
            <Typography sx={ stylesSearchResults.totalList }>
              <Box component="span" sx={ stylesSearchResults.totalListSpan }>
                { searchResults.length }
              </Box>
              <Box component="span"> inmuebles</Box>
            </Typography>
          </Grid>
        </Grid>
        {/* Cards with pagination*/ }
        { searchResults.length === 0 ? (
          <SkeletonMessage messageText="Sin propiedades para mostrar" />
        ) : (
          <CardsWithPagination list={ searchResults } />
        ) }
      </Container>
    </>
  )
}

export default SearchResults
