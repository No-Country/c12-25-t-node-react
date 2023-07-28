import TextBox from '../components/molecule/text-box/TextBox'
import TitleText from '../components/molecule/text/Text'
import { ABOUT_US_TEXT } from '../utils/about-us-text'
import Subtitle from '../components/atom/Subtitle'
import CardsGrid from '../components/template/cardsAbout/CardsGrid'
import BackButton from '../components/atom/BackButton'
import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'


type AboutProps = {
}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage
        imgSrc='https://i.postimg.cc/Jn1rFw9v/about-us-banner.png'
      >
        <TextBox subTitle={
          <Subtitle
            title="Conocé nuestra "
            titleBold="Empresa"
            padding="2rem 2rem 1rem"
          />
        }
        >
          <TitleText
            textToShow={ ABOUT_US_TEXT }
            paddingText="0.25rem 2rem"
          />
        </TextBox>
        <CardsGrid />
      </BannerAndBackgroundPage>
    </>
  )
}

export default About