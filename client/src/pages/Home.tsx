import PrimaryButton from '../components/atom/PrimaryButton'
import FeaturedForRentAcordion from '../components/template/featuredForRent/FeaturedForRentAcordion'
import FeaturedForSaleAcordion from '../components/template/featuredForSale/FeaturedForSaleAcordion'

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
      <PrimaryButton text="Home" />
      <FeaturedForSaleAcordion />
      <FeaturedForRentAcordion />
    </main>
  )
}

export default Home
