import { Link } from 'react-router-dom'
import {
  Grid,
  Typography
} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LogoText from '../../atom/LogoText'

type LogoSocialMediaProps = {
}

const LogoSocialMedia: React.FC<LogoSocialMediaProps> = () => {
  return (
    <Grid container spacing={ 2 } sx={ { padding: '1rem 0rem' } }>
      <Grid item xs={ 12 } sm={ 9 }>
        <LogoText />
      </Grid>
      <Grid item xs={ 12 } sm={ 3 }>
        <Typography align="right">
          Seguinos
          <Link to="/" className="links-footer-social"><InstagramIcon /></Link>
          <Link to="/" className="links-footer-social"><LinkedInIcon /></Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LogoSocialMedia