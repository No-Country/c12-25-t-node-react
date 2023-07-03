import PrimaryButton from "../components/atom/PrimaryButton"
import HeroImage from "../components/heroImage/HeroImage.tsx";


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
      <HeroImage/>
      <PrimaryButton text="Home" />
    </main>
  )
}

export default Home