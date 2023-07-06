import {
  Box,
  Divider,
  Typography
} from '@mui/material'
import termsAndConditionBanner from '../assets/terms-condition-banner.png'
import Subtitle from '../components/atom/Subtitle'
import { CONDITIONS, INTRODUCTION } from '../utils/terms-conditions-text'
import './TermsConditions.style.css'
import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import TextBox from '../components/molecule/text-box/TextBox'

type TermsConditionsProps = {
}

const TermsConditions: React.FC<TermsConditionsProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={ termsAndConditionBanner } >
      <TextBox>
        <Subtitle
          title="Términos y condiciones de "
          fontWeight="500"
          titleBold="uso del sitio"
          titleBoldWeight="600"
          variant="h2"
          textColor="#1B17E7"
          textAlign="center"
        />
        <Divider
          sx={ {
            borderColor: '#939396',
            boxShadow: '0px 4px 4px 0px #00000040'
          } }
        />
        <Box className="text-scroll">
          <Typography sx={ { padding: '1.5rem 2rem' } }>{ INTRODUCTION }</Typography>
          { CONDITIONS && CONDITIONS.map(condition => (
            <Box key={ condition.title } sx={ { padding: '0.25rem 2rem 1rem' } }>
              <Subtitle title={ condition.title } variant="h3" padding="20px 0px!important" fontWeight="600" />
              {
                condition.text.map((text, index) => <Typography key={ `a-${ index }` } sx={ { paddingBottom: '0.5rem' } }>{ text }</Typography>)
              }
            </Box>
          )) }
        </Box>
      </TextBox>
    </BannerAndBackgroundPage>
  )
}

export default TermsConditions