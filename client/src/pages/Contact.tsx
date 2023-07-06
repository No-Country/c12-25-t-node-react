import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import contactUsBanner from '../assets/contact-us-banner.png'

type ContactProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Contact: React.FC<ContactProps> = ({title}) => {
  */
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={contactUsBanner} />
  )
}

export default Contact