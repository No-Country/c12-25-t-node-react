import {
  Grid,
} from '@mui/material'
import backgroundPotho from '../../../assets/contact-property-by-id.png'
import TextBox from '../text-box/TextBox'
import Subtitle from '../../atom/Subtitle'
import ContactForm from '../../template/contactForm/ContactForm'
import { CONTACT_TEXT } from '../../../utils/contact-form-conditions'
import TitleText from '../../molecule/text/Text'

type ContactPropertyProps = {
}

const ContactProperty: React.FC<ContactPropertyProps> = () => {
  return (
    <section>
      <Grid container sx={ { paddingTop: '6rem' } }>
        <Grid item xs={ 12 } md={ 4 } sx={ stylePhotoUp }>
          <img src={ backgroundPotho } width=' 100%' />
        </Grid>
        <Grid item xs={ 12 } md={ 8 }>
          <TextBox
            boxTop='-70px'
            paperMargin='1rem auto'
            subTitle={
              <Subtitle
                title='Comunicate con'
                titleBold='nosotros'
                padding='1rem 0.5rem 1.5rem'
                textAlign='center'
              />
            }
          >
            <TitleText
              textToShow={ CONTACT_TEXT }
              paddingText="1rem 2rem" />
            <ContactForm />
            <Subtitle
              title='Al enviar este formulario estás aceptás los '
              titleBold='términos y condiciones de uso y la política de privacidad.'
              padding='1rem 1.1rem 1.5rem'
              textColor='#000'
              variant='h3'
            />
          </TextBox>
        </Grid>
        <Grid item xs={ 12 } md={ 4 } sx={ stylePhotoDown }>
          <img src={ backgroundPotho } width=' 100%' />
        </Grid>
      </Grid>
    </section>
  )
}

export default ContactProperty

const stylePhotoUp = {
  display: {xs:'flex', md:'none'},
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center'
}
const stylePhotoDown = {
  display: {xs:'none', md:'flex'},
  flexWrap: 'wrap',
  alignContent: 'center',
  justifyContent: 'center',
  alignItems: 'center'
}