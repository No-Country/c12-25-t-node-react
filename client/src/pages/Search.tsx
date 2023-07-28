import BackButton from '../components/atom/BackButton'
import SearchResults from '../components/template/search-results/SearchResults'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'

type SearchProps = {}

const Search: React.FC<SearchProps> = () => {
  return (
    <section>
      <BackButton />
      <Box sx={ { background: '#F1F1F9' } }>
        <Grid
          sx={ {
            height: '460px' ,
            backgroundImage: `url(${ '../assets/search-banner.png' })`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          } }
        ></Grid>
      </Box>
      <SearchResults />
    </section>
  )
}

export default Search
