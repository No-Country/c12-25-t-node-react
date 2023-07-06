import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'

type HomeProps = {
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