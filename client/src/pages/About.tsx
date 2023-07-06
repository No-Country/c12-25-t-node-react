import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import TextBox from '../components/molecule/text-box/TextBox'
import TitleText from '../components/molecule/title-text/TitleText'
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
        <TitleText />
      </TextBox>
      {/* TODO: section team goes here*/}
    </BannerAndBackgroundPage>
  )
}

export default About