import PrimaryButton from "../components/atom/PrimaryButton"
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import CallToActionContactForm from "../components/molecule/cta-contact-form/CallToActionContactForm.tsx";


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
      <CallToActionContactForm imageUrl={ImageCtaLeft} textPosition={"left"} />
      <CallToActionContactForm imageUrl={ImageCtaRight} textPosition={"right"} />

    </main>
  )
}

export default Home