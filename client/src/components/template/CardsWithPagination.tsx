import { 
  Container,
  Grid,
  Stack,
  Pagination
} from '@mui/material'
import FeaturedCard from "../molecule/FeaturedCard"
import { useState } from 'react'
import { EstateDetail } from '../../model/estate-detail'

type CardsWithPaginationProps = {
  list: EstateDetail[]
}

const CardsWithPagination: React.FC<CardsWithPaginationProps> = ({list}) => {
  const [page, setPage] = useState(1)
  const [cardsList, setCardsList] = useState<EstateDetail[]>(list)

  return (
    <Container maxWidth='lg'>
      <Grid container sx={ styles.cardContainer } className="featured-card-container" >
          { cardsList && cardsList.slice((page - 1) * 12, page * 12).map((result, index) => {
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
                <FeaturedCard estate={ result } />
              </Grid>
            )
          }
          ) }
        </Grid>
        <Grid item xs={ 12 } sx={ { padding: '2rem 0.5rem 4rem' } } >
          <Stack spacing={ 2 } sx={ styles.stack } >
            <Pagination
              count={ Math.ceil(cardsList.length / 12) }
              page={ page }
              onChange={ (event, value) => setPage(value) }
              variant="outlined"
              shape="rounded"
              size="large"
              color="secondary"
            />
          </Stack>
        </Grid>
    </Container>
  )
}

export default CardsWithPagination

const styles = {
  cardContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'
  },
  stack: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  }
}