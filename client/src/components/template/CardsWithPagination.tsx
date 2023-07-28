import { Container, Grid, Stack, Pagination } from '@mui/material'
import FeaturedCard from '../molecule/FeaturedCard'
import { useState } from 'react'
import { EstateDetail } from '../../model/estate-detail'
import { stylesCardsWithPagination } from './CardsWithPagination.styles'

type CardsWithPaginationProps = {
  list: EstateDetail[]
}

const CardsWithPagination: React.FC<CardsWithPaginationProps> = ({ list }) => {
  const [page, setPage] = useState(1)
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={stylesCardsWithPagination.cardContainer}
        className="featured-card-container"
      >
        {list &&
          list.slice((page - 1) * 12, page * 12).map((result, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={`result-${index}`}
                sx={{ margin: '8px 6px' }}
                className="featured-card-item"
              >
                <FeaturedCard estate={result} />
              </Grid>
            )
          })}
      </Grid>
      <Grid item xs={12} sx={stylesCardsWithPagination.grid}>
        <Stack spacing={2} sx={stylesCardsWithPagination.stack}>
          <Pagination
            count={Math.ceil(list.length / 12)}
            page={page}
            onChange={(event, value) => setPage(value)}
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
