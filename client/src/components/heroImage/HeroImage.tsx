import heroImage from '../../assets/heroImage/heroImage.png'
import { Grid } from '@material-ui/core'
import './HeroImage.styles.css'

const HeroImage = ()=> {
  return (
      <Grid container>
          <Grid item xs={12}>
              <img
                  className="heroImage"
                  src={heroImage}
                  alt="Imagen de sala de estar"
              />
          </Grid>
      </Grid>
  )
}

export default HeroImage