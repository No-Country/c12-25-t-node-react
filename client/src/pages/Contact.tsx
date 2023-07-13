import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import contactUsBanner from '../assets/contact-us-banner.png'
import TextBox from '../components/molecule/text-box/TextBox'
import Subtitle from '../components/atom/Subtitle'
import ContactForm from '../components/template/contactForm/ContactForm'

type ContactProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Contact: React.FC<ContactProps> = ({title}) => {
  */
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={contactUsBanner} >
      <TextBox subTitle={
        <Subtitle
        title='Hola'
        titleBold='hola'
        padding='2rem 2rem 1rem'/>
      }>
        <ContactForm/>
      </TextBox>
    </BannerAndBackgroundPage>
  )
}

export default Contact