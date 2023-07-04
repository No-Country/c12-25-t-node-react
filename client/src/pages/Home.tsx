import PrimaryButton from '../components/atom/PrimaryButton'
import FeaturedForRentAcordion from '../components/template/featuredForRent/FeaturedForRentAcordion'
import FeaturedForSaleAcordion from '../components/template/featuredForSale/FeaturedForSaleAcordion'
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'

type HomeProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Home: React.FC<HomeProps> = ({title}) => {
  */
}

const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <HeroImage />
      <FeaturedForSaleAcordion />
      <FeaturedForRentAcordion />
    </main>
  )
}

export default Home
