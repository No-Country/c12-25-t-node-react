import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import TextBox from '../components/molecule/text-box/TextBox'
import TitleText from '../components/molecule/title-text/TitleText'
import aboutBanner from '../assets/about-us-banner.png'
import { ABOUT_US_TEXT } from '../utils/about-us-text'

type AboutProps = {
}

const About: React.FC<AboutProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={ aboutBanner }>
      <TextBox>
        <TitleText
          title="Conocé nuestra "
          titleBold="Empresa"
          padding="2rem 2rem 1rem"
          variant="h2"
          textToShow={ ABOUT_US_TEXT }
          paddingText="0.25rem 2rem"
        />
      </TextBox>
      {/* TODO: section team goes here*/ }
    </BannerAndBackgroundPage>
  )
}

export default About