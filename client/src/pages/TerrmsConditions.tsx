import {
  Box,
  Divider,
  Paper,
  Typography
} from '@mui/material'
import HeroImage from '../components/atom/heroImage/HeroImage'
import termsAndConditionBanner from '../assets/terms-condition-banner.png'
import Subtitle from '../components/atom/Subtitle'
import { CONDITIONS, INTRODUCTION } from '../utils/terms-conditions-text'

type TermsConditionsProps = {
}

const TermsConditions: React.FC<TermsConditionsProps> = () => {
  return (
    <main>
      <HeroImage
        imgSrc={ termsAndConditionBanner }
        imgHeight="23vh"
      />
      <Box
        sx={ {
          width: '80%',
          maxWidth: '800px',
          margin: '2rem auto',
          position: 'relative',
          top: '-100px'
        } }
      >
        <Paper
          elevation={ 2 }
        >
          <Subtitle
            title="Términos y condiciones del sitio"
            variant="h2"
            textTransform="none"
            textColor="#1B17E7"
            textAlign="center"
          />
          <Divider />
          <Typography sx={ { padding: '1.5rem 1.5rem' } }>{ INTRODUCTION }</Typography>
          { CONDITIONS && CONDITIONS.map(condition => (
            <Box key={ condition.title } sx={{padding: '0.25rem 1.5rem 1rem'}}>
              <Subtitle title={ condition.title } variant="h3" />
              {
                condition.text.map((text, index) => <Typography key={`a-${index}`} sx={{paddingBottom: '0.5rem'}}>{ text }</Typography>)
              }
            </Box>
          )) }
          <Typography></Typography>
        </Paper>
      </Box>
    </main>
  )
}

export default TermsConditions