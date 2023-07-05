import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import heroImageBanner from '../assets/heroImage.png'
import Loader from '../components/atom/Loader.tsx'

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
      <HeroImage imgSrc={ heroImageBanner } />
      <Loader
        text="cargando..."
        imageSrc="https://img.icons8.com/emoji/48/house-emoji.png" loadingInitialState={ true }
      />
    </main>
  )
}

export default Home