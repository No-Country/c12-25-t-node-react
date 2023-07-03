import heroImage from '../../assets/heroImage/heroImage.png'
import { Grid } from '@material-ui/core';
const HeroImage = ()=> {
  return (
      <Grid container>
          <Grid item xs={12}>
              <img
                  src={heroImage}
                  alt="Imagen"
                  style={{ width: '100%', height: '50vh', objectFit: 'cover' }}
              />
          </Grid>
      </Grid>
  )
}
export default HeroImage