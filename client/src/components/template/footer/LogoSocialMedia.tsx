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
      <Grid item xs={ 12 } sm={ 8 }>
        <LogoText white={ true } />
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Typography align="right">
          Seguinos
          <Link
            to="/"
            className="links-footer-social"
            aria-label="Página principal de Appartamentos"
          >
            <InstagramIcon />
          </Link>
          <Link
            to="/"
            className="links-footer-social"
            aria-label="Página principal de Appartamentos"
          >
            <LinkedInIcon />
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LogoSocialMedia