import FeaturedForSaleAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import mockApiData from '../api/mockApi.json'
import { useState, useEffect } from 'react'

type HomeProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Home: React.FC<HomeProps> = ({title}) => {
  */
}
export interface Estates {
  id: string
  description: string
  adress: string
  area: number
  bedrooms: number
  bathrooms: number
  cars: number
  image: string
  forRent: boolean
  forSale: boolean
}
const Home: React.FC<HomeProps> = () => {
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
      <HeroImage />
      <FeaturedForSaleAcordion textTitle="venta" estates={estatesForSale} />
      <FeaturedForSaleAcordion textTitle="alquiler" estates={estatesForRent} />
    </main>
  )
}

export default Home
