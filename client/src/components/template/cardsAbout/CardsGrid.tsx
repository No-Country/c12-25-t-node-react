import { Container, Grid } from '@mui/material'
import CardsAbout from './CardsAbout'
import persons from '../../../api/personal.json'
import Subtitle from '../../atom/Subtitle'
import { Personal } from '../../../model/personal'
import { stylesCardsGrid } from './CardsGrid.styles'

const CardsGrid = () => {
  const lastPerson: Personal = persons.filter((item) => item.id === 7)[0]

  return (
    <Container maxWidth="lg" sx={ stylesCardsGrid.gridContainer } >
      <Subtitle
        title="Comunicate con nuestro "
        titleBold=" equipo"
        padding="2rem 2rem 1rem"
        textAlign="center"
        textColor="rgba(0, 0, 0, 0.87)"
      />
      <Grid container spacing={ 1 } sx={ { marginTop: '2rem' } }
      >
        <Grid item xs={ 12 } md={ 9 } sx={stylesCardsGrid.containerCardNormal}>
          { persons
            .filter((item: Personal) => item.id <= 6)
            .map((item) => (
              <CardsAbout
                key={ item.id }
                image={ item.image }
                name={ item.name }
                lastName={ item.lastName }
                position={ item.position }
                whatsapp={ item.whatsapp }
                mail={ item.mail }
                isSpecialCard={ false }
              />
            )) }
        </Grid>
        <Grid item xs={ 12 } md={ 3 } sx={ stylesCardsGrid.cardContainer } >
          { lastPerson &&
            <CardsAbout
              key={ lastPerson.id }
              image={ lastPerson.image }
              name={ lastPerson.name }
              lastName={ lastPerson.lastName }
              position={ lastPerson.position }
              whatsapp={ lastPerson.whatsapp }
              mail={ lastPerson.mail }
              isSpecialCard={ true }
            />
          }
        </Grid>
      </Grid>
    </Container>
  )
}

export default CardsGrid

