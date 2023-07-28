import TextBox from '../components/molecule/text-box/TextBox'
import TitleText from '../components/molecule/text/Text'
import { ABOUT_US_TEXT } from '../utils/about-us-text'
import Subtitle from '../components/atom/Subtitle'
import CardsGrid from '../components/template/cardsAbout/CardsGrid'
import BackButton from '../components/atom/BackButton'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'


type AboutProps = {
}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <BackButton />
      <Box sx={ { background: '#F1F1F9' } }>
        <Grid
          sx={ {
            height: '350px' ,
            backgroundImage:'../assets/about-us-banner.png',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          } }
        />
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
      </Box>
    </>
  )
}

export default About