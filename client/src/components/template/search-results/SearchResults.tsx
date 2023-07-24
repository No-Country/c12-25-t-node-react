import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Grid,
  List,
  Typography,
} from '@mui/material'
import { EstateDetail } from '../../../model/estate-detail'
import PrimaryButton from '../../atom/PrimaryButton'
import ListItemButtonOptions from '../../molecule/ListItemButtonOptions'
import CardsWithPagination from '../CardsWithPagination'
import useOptionsToSearch from '../../../hooks/useOptionsToSearch'
import MultipleSelect from '../../molecule/multiple-select/MultipleSelect'
import SearchIcon from '@mui/icons-material/Search'

type SearchResultsProps = {
  results: EstateDetail[]
  setSearchResults: React.Dispatch<React.SetStateAction<EstateDetail[]>>
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  setSearchResults
}) => {
  const [selectedOperation, setSelectedOperation] = useState<string[]>([])
  const [selectedCity, setSelectedCity] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [selectedRoom, setSelectedRoom] = useState<string[]>([])

  const handleClick = () => {
    if (selectedOperation.length > 0) console.log('selectedOperation', selectedOperation)
  }

  useEffect(() => {
    const resultsBySelectedOperationSale = results.filter(result => result.for_sale === true && selectedOperation.includes('Venta'))
    const resultsBySelectedOperationRent = results.filter(result => result.for_rent === true && selectedOperation.includes('Alquler'))
    console.log('resultsBySelectedOperation VENTA: ', resultsBySelectedOperationSale)
    console.log('resultsBySelectedOperation ALQUILER: ', resultsBySelectedOperationRent)
    setSearchResults(resultsBySelectedOperationSale)
  }, [selectedOperation])

  /**
   *  Using the custom hook useOptionsToSearch to obtain an array of options
   *  to be display in the select
   */
  const cityOptions: string[] = useOptionsToSearch('city', results).sort()
  const typeOptions: string[] = useOptionsToSearch('property_type', results).sort()
  const bedroomsOptions: string[] = useOptionsToSearch('bedrooms', results).sort()

  return (
    <>
      <Container maxWidth='lg'>
        <List
          sx={ styles.list }
          component="nav"
          aria-labelledby="Menu de filtro para búsqueda de propiedad"
        >
          <ListItemButtonOptions >
            <MultipleSelect textToDisplay='Operación' listOptions={ ['Venta', 'Alquiler'] } options={ selectedOperation } setOptions={ setSelectedOperation } />
          </ListItemButtonOptions>
          <ListItemButtonOptions  >
            <MultipleSelect textToDisplay='Ubicación' listOptions={ cityOptions } options={ selectedCity } setOptions={ setSelectedCity } />
          </ListItemButtonOptions>
          <ListItemButtonOptions >
            <MultipleSelect textToDisplay='Tipo de propiedad' listOptions={ typeOptions } options={ selectedType } setOptions={ setSelectedType } />
          </ListItemButtonOptions>
          <ListItemButtonOptions >
            <MultipleSelect textToDisplay='Dormitorios' listOptions={ bedroomsOptions } options={ selectedRoom } setOptions={ setSelectedRoom } />
          </ListItemButtonOptions>
          <PrimaryButton
            text='Buscar'
            aria-label='Buscar propiedad'
            icon={ <SearchIcon /> }
            textDisplay={ { xs: 'flex', md: 'none' } }
            sx={ {
              margin: '1rem auto',
              padding: { xs: '0.5rem 1rem', md: '6px 12px' },
              width: { xs: '260px', sm: '350px', md: '20px' }
            } }
            onClick={ handleClick }
          />
        </List>
        {/* Mostrar total */ }
        <Grid container>
          <Grid item xs={ 12 }>
            <Typography sx={ styles.totalList } >
              <Box component='span' sx={ styles.totalListSpan } >{ results.length }</Box>  inmuebles
            </Typography>
          </Grid>
        </Grid>
        {/* Cards with pagination*/ }
        <CardsWithPagination list={ results } />
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
    boxShadow: '0px 4px 10px grey',
    padding: '8px'
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