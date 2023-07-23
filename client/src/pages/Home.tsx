import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import Searcher from '../components/Searcher.tsx'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {

  return (
    <main>
      <HeroImage imgSrc={heroImageBanner} />
      <Searcher />
      <FeaturedAcordion textTitle="venta" />
      <FeaturedAcordion textTitle="alquiler" />
      <CallToActionContactForm imageUrl={ImageCtaLeft} textPosition={'left'} />
      <CallToActionContactForm imageUrl={ImageCtaRight} textPosition={'right'} />
    </main>
  )
}

export default Home
