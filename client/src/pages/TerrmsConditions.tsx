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

type TermsConditionsProps = {
}

const TermsConditions: React.FC<TermsConditionsProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={ termsAndConditionBanner } >
      <Subtitle
        title="Términos y condiciones del sitio"
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
        <Typography sx={ { padding: '1.5rem 1.5rem' } }>{ INTRODUCTION }</Typography>
        { CONDITIONS && CONDITIONS.map(condition => (
          <Box key={ condition.title } sx={ { padding: '0.25rem 1.5rem 1rem' } }>
            <Subtitle title={ condition.title } variant="h3" padding="20px 0px!important" fontWeight="600" />
            {
              condition.text.map((text, index) => <Typography key={ `a-${ index }` } sx={ { paddingBottom: '0.5rem' } }>{ text }</Typography>)
            }
          </Box>
        )) }
      </Box>
    </BannerAndBackgroundPage>
  )
}

export default TermsConditions