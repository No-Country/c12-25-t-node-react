import { Grid } from '@mui/material'
import backgroundPotho from '../../../assets/contact-property-by-id.png'

type ContactPropertyProps = {
}

const ContactProperty: React.FC<ContactPropertyProps> = () => {
  return (
    <section>
      <Grid container>
        <Grid item>

        </Grid>
        <Grid item>
          <img src={backgroundPotho}/>
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactProperty