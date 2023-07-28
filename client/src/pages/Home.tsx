import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import Searcher from '../components/Searcher.tsx'
import { estatesDetailList } from '../utils/EstatesDetailsList.ts'

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
      <HeroImage imgSrc={ heroImageBanner } />
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
