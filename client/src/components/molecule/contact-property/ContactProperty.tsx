import { 
  Container,
  Grid 
} from '@mui/material'
import backgroundPhoto from '../../../assets/contact-property-by-id.png'
import TextBox from '../text-box/TextBox'
import Subtitle from '../../atom/Subtitle'
import ContactForm from '../../template/contactForm/ContactForm'
import { CONTACT_TEXT } from '../../../utils/contact-form-conditions'
import TitleText from '../../molecule/text/Text'
import './ContactProperty.styles.css'
import { stylesContactProperty} from './ContactProperty.styles'

type ContactPropertyProps = {
}

const ContactProperty: React.FC<ContactPropertyProps> = () => {
  return (
    <Container maxWidth='xl' id="contact-form">
      <Grid container sx={ { paddingTop: '6rem' } }>
        <Grid item xs={ 12 } md={ 4 } lg={ 3 } sx={ stylesContactProperty.photoUp }>
          <img src={ backgroundPhoto } className="home-small" />
        </Grid>
        <Grid item xs={ 12 } md={ 8 } lg={ 9 } sx={ { zIndex: '1' } }>
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
        <Grid item xs={ 12 } md={ 4 } lg={ 3 } sx={ stylesContactProperty.photoDown }>
          <img
            src={ backgroundPhoto }
            width='100%'
            className="home-large"
            alt='Frente de inmueble con jardín'
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ContactProperty
