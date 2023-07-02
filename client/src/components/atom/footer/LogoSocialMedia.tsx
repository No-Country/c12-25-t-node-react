import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom'

type LogoSocialMediaProps = {
}

const LogoSocialMedia: React.FC<LogoSocialMediaProps> = () => {
  return (
    <Grid container spacing={ 2 } sx={{paddingBottom: '1rem'}}>
      <Grid item xs={ 12 } sm={ 9 }>
        <Typography sx={ { 
          fontWeight: '800', 
          letterSpacing: '1px', 
          fontSize: '1.5rem' 
        } }>
          <Link to="/" className="link-logo">
            <span className="primary-light">App</span><span className="primary">artamentos</span>
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={ 12 } sm={ 3 }>
        <Typography align="right">
          Seguinos <Link to="/"><InstagramIcon /></Link> <Link to="/"><LinkedInIcon /></Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LogoSocialMedia