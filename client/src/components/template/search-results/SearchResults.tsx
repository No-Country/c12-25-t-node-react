import {
  Container,
  Grid,
  Typography,
  Pagination,
  Stack
} from '@mui/material'
import { EstateDetail } from '../../../model/estate-detail'
import FeaturedCard from '../../molecule/FeaturedCard'

type SearchResultsProps = {
  results: EstateDetail[]
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results
}) => {
  console.log(results)

  return (
    <>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={ 12 }>
            <Typography>inmuebles</Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl'>
        <Grid
          container
          sx={ {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          } }>
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
                  margin: '12px',
                  display: 'flex', 
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                } }
              >
                <FeaturedCard
                  estate={ result }
                />
              </Grid>
            )
          }
          ) }
        </Grid>
      </Container>
      <Container maxWidth='lg'>
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