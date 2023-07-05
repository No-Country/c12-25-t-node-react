import PrimaryButton from "../components/atom/PrimaryButton"
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import heroImageBanner from '../assets/heroImage.png'


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
      <HeroImage imgSrc={heroImageBanner} />
    </main>
  )
}

export default Home