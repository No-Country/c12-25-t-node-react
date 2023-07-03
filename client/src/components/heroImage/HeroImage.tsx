import heroImage from '../../assets/heroImage/heroImage.png'
import { Grid } from '@material-ui/core';
const HeroImage = ()=> {
  return (
      <Grid container>
          <Grid item xs={12}>
              <img
                  src={heroImage}
                  alt="Imagen"
                  style={{  }}
              />
          </Grid>
      </Grid>
  )
}
export default HeroImage