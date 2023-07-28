import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import Searcher from '../components/Searcher.tsx'
import { estatesDetailList } from '../utils/EstatesDetailsList.ts'
import { Grid } from '@mui/material'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const filteredForSaleEstates = estatesDetailList.filter(
    (estate) => (estate.for_sale && estate.is_featured)
  )

  const filteredForRentEstates = estatesDetailList.filter(
    (estate) => (estate.for_rent && estate.is_featured)
  )

  return (
    <main>
      <Grid
        sx={ {
          height: '50vh',
          backgroundImage: `url(${ './assets/heroImage.png' })`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        } }
      />

      <Searcher />
      <FeaturedAcordion textTitle="venta" estates={ filteredForSaleEstates } />
      <FeaturedAcordion textTitle="alquiler" estates={ filteredForRentEstates } />
      <CallToActionContactForm imageUrl={ ImageCtaLeft } textPosition={ 'left' } />
      <CallToActionContactForm
        imageUrl={ ImageCtaRight }
        textPosition={ 'right' }
      />
    </main>
  )
}

export default Home
