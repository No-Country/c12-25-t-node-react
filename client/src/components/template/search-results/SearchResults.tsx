import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Container, Grid, List, Typography } from '@mui/material'
import { EstateDetail } from '../../../model/estate-detail'
import PrimaryButton from '../../atom/PrimaryButton'
import ListItemButtonOptions from '../../molecule/ListItemButtonOptions'
import CardsWithPagination from '../CardsWithPagination'
import useOptionsToSearch from '../../../hooks/useOptionsToSearch'
import MultipleSelect from '../../molecule/multiple-select/MultipleSelect'
import SearchIcon from '@mui/icons-material/Search'
import { stylesSearchResults } from './SearchResults.styles'

type SearchResultsProps = {
  results: EstateDetail[]
  setSearchResults: React.Dispatch<React.SetStateAction<EstateDetail[]>>
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  const [searchResults, setSearchResults] = useState<EstateDetail[]>(results)
  const [selectedOperation, setSelectedOperation] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedRoom, setSelectedRoom] = useState<string[]>([])
  /**
   *  Using the custom hook useOptionsToSearch to obtain an array of options
   *  to be display in the select
   */
  const cityOptions: string[] = useOptionsToSearch('city', searchResults)
  const typeOptions: string[] = useOptionsToSearch('property_type', searchResults)
  const bedroomsOptions: string[] = useOptionsToSearch('bedrooms', searchResults)
  /* 
  * Set the default values if the user come from the Home Page Search
  *using the query params
  */
  const [params] = useSearchParams()
  const operationParam = params.get('operation')
  const typeParam = params.get('type')
  const cityParam = params.get('city')

  useEffect(() => {
    if (operationParam && operationParam === 'for_sale') setSelectedOperation(['Venta'])
    if (operationParam && operationParam === 'for_rent') setSelectedOperation(['Alquiler'])
    if (typeParam) setSelectedType(typeParam.split(','))
    if (cityParam) setSelectedCity(cityParam.split(','))
  }, [])

  useEffect(() => {
    const resultsBySelectedOperationSale = results.filter(result => result.for_sale === true && selectedOperation.includes('Venta'))
    const resultsBySelectedOperationRent = results.filter(result => result.for_rent === true && selectedOperation.includes('Alquler'))
    console.log(resultsBySelectedOperationRent, resultsBySelectedOperationSale)
  }, [selectedOperation])

  const handleClick = () => { console.log('handleClick: ', selectedOperation, selectedCity, selectedType, selectedRoom) }

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
              textToDisplay="Inmueble"
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
              </Box>{ ' ' }
              inmuebles
            </Typography>
          </Grid>
        </Grid>
        {/* Cards with pagination*/ }
        <CardsWithPagination list={ searchResults } />
      </Container>
    </>
  )
}

export default SearchResults

