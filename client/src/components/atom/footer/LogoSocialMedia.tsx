import { Grid, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

type LogoSocialMediaProps = {
  /* 
  title: string
  */
}

const LogoSocialMedia: React.FC<LogoSocialMediaProps> = () => {
  return (
    <Grid container spacing={ 2 }>
      <Grid item xs={ 12 } md={ 4 }>
        <Typography sx={ { fontWeight: '800', letterSpacing: '1px' } }>
          <span className="primary-light">App</span><span className="primary">artamentos</span>
        </Typography>
      </Grid>
      <Grid item xs={ 12 } md={ 6 }>
        <Typography sx={ {} }>
          Seguinos <InstagramIcon /> <LinkedInIcon />
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LogoSocialMedia