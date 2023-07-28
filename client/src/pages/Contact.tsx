import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import contactUsBanner from '../assets/contact-us-banner.png'
import TextBox from '../components/molecule/text-box/TextBox'
import Subtitle from '../components/atom/Subtitle'
import ContactForm from '../components/template/contactForm/ContactForm'
import { CONTACT_TEXT } from '../utils/contact-form-conditions'
import TitleText from '../components/molecule/text/Text'
import BackButton from '../components/atom/BackButton'
type ContactProps = {
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={ contactUsBanner } >
        <TextBox
          subTitle={
            <Subtitle
              title='Comunicate con'
              titleBold='nosotros'
              padding='1rem 1.1rem 1.5rem'
              textAlign='center'
            />
          }
        >
          <TitleText
            textToShow={ CONTACT_TEXT }
            paddingText="1rem 2rem" />
          <ContactForm />
          <Subtitle
            title='Al enviar este formulario estás aceptás los '
            titleBold='términos y condiciones de uso y la política de privacidad.'
            padding='1rem 1.1rem 1.5rem'
            textColor='#000'
            variant='h3'
          />
        </TextBox>
      </BannerAndBackgroundPage>
    </>
  )
}

export default Contact