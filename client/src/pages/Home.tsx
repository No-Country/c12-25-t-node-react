import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import Searcher from '../components/Searcher.tsx'
import { estatesDetailList } from '../utils/EstatesDetailsList.ts'
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  const filteredForSaleEstates = estatesDetailList.filter(
    (estate) => estate.for_sale && estate.is_featured
  )

  const filteredForRentEstates = estatesDetailList.filter(
    (estate) => estate.for_rent && estate.is_featured
  )

  return (
    <main>
      <HeroImage
        imgSrc='https://i.postimg.cc/zG78R2Lk/hero-Image.png'
        imgHeight='50vh'
      />
      <Searcher />
      <FeaturedAcordion textTitle="venta" estates={ filteredForSaleEstates } />
      <FeaturedAcordion textTitle="alquiler" estates={ filteredForRentEstates } />
      <CallToActionContactForm
        imageUrl='https://i.postimg.cc/8kL86X9r/image-Cta-Left.png'
        textPosition={ 'left' }
      />
      <CallToActionContactForm
        imageUrl='https://i.postimg.cc/MHSF5xNf/image-Cta-Right.png'
        textPosition={ 'right' }
      />
    </main>
  )
}

export default Home
