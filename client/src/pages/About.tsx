import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import TextBox from '../components/molecule/text-box/TextBox'
import aboutBanner from '../assets/about-us-banner.png'

type AboutProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const About: React.FC<AboutProps> = ({title}) => {
  */
}

const About: React.FC<AboutProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={aboutBanner}> 
      <TextBox>

      </TextBox>
      {/* TODO: section team goes here*/}
    </BannerAndBackgroundPage>
  )
}

export default About