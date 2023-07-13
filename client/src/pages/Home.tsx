import { useState, useEffect } from 'react'
import mockApiData from '../api/mockApi.json'
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import { Estates } from '../model/estates.ts'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import { useSpinner} from '../context/SpinnerProvider.tsx' // para Loader

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  // Ejemplo de como usar el loader cuando hacemos un fetch
  // const { addLoading, removeLoading} = useSpinner()
  // useEffect(() => {
  //  const hagoFetch = async () => {
  //     addLoading()
  //     try {
  //     } catch(err) { 
  //        //aca hay que mostrar error
  //     } finally {
  //      removeLoading()
  //     }
  //   }
  //   hagoFetch()
  // }, [])
  const [estatesForSale, setStatesForSale] = useState<Estates[]>([])
  const [estatesForRent, setStatesForRent] = useState<Estates[]>([])
  useEffect(() => {
    const estatesOnlyForSale = mockApiData.filter(
      (state) => state.forSale === true
    )
    const estatesOnlyForRent = mockApiData.filter(
      (state) => state.forRent === true
    )
    setStatesForSale(estatesOnlyForSale)
    setStatesForRent(estatesOnlyForRent)
  }, [])

  return (
    <main>
      <HeroImage imgSrc={ heroImageBanner } />
      <FeaturedAcordion textTitle="venta" estates={ estatesForSale } />
      <FeaturedAcordion textTitle="alquiler" estates={ estatesForRent } />
      <CallToActionContactForm imageUrl={ ImageCtaLeft } textPosition={ 'left' } />
      <CallToActionContactForm imageUrl={ ImageCtaRight } textPosition={ 'right' } />
    </main>
  )
}

export default Home
