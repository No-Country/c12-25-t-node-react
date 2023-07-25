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
import { useSpinner } from '../../../context/SpinnerProvider'
import { useEstateDetails } from '../../../store/database'
import SkeletonMessage from '../../atom/SkeletonMessage'
import { useSnackbar } from 'notistack'

type SearchResultsProps = {
}

const SearchResults: React.FC<SearchResultsProps> = ({ }) => {
  const [params] = useSearchParams()
  const operationParam = params.get('operation')
  const typeParam = params.get('type')
  const cityParam = params.get('city')

  const { enqueueSnackbar } = useSnackbar()
  const { addLoading, removeLoading } = useSpinner()
  const { estateDetails, getEstateDetails } = useEstateDetails() 

  const [searchResults, setSearchResults] = useState<EstateDetail[]>([])

  const [selectedOperation, setSelectedOperation] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedRoom, setSelectedRoom] = useState<string[]>([])
  /**
   * Using the custom hook useOptionsToSearch to obtain 
   * an array of options to be display in the select
   */
  const cityOptions: string[] = useOptionsToSearch('city', estateDetails)
  const typeOptions: string[] = useOptionsToSearch('property_type', estateDetails)
  const bedroomsOptions: string[] = useOptionsToSearch('bedrooms', estateDetails)

  useEffect(() => {
    // Set the list of states from Firebase and Zustand store
    addLoading()
    getEstateDetails()
    removeLoading()
    // Set the default values if the user comes from the HomePage, using the query params
    if (operationParam && operationParam === 'for_sale') setSelectedOperation(['Venta'])
    if (operationParam && operationParam === 'for_rent') setSelectedOperation(['Alquiler'])
    if (typeParam) setSelectedType(typeParam.split(','))
    if (cityParam) setSelectedCity(cityParam.split(','))
    // TODO: actualizar al lista de propiedades acorde a los paramas
  }, [])

  useEffect(() => {
    //TODO: completar
  }, [selectedOperation])

  const handleClick = () => {
    if (selectedOperation.length === 0 ||
      selectedCity.length === 0 ||
      selectedType.length === 0) {
      enqueueSnackbar('¡Debes elegir: operación, zona y tipo de propiedad!', {
        variant: 'error',
      })
    }
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
                { estateDetails.length }
              </Box><Box component="span" > inmuebles</Box>
            </Typography>
          </Grid>
        </Grid>
        {/* Cards with pagination*/ }
        { estateDetails.length === 0 ?
          <SkeletonMessage messageText="Sin propiedades para mostrar" />
          :
          <CardsWithPagination list={ estateDetails } />
        }

      </Container>
    </>
  )
}

export default SearchResults

