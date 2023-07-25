import {
  Grid,
  Typography
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import Subtitle from '../../atom/Subtitle'
import LinkList from '../../molecule/LinkList'
import { COMPANY, SERVICES } from './footerConstants'

type LinksInfoProps = {
}

const LinksInfo: React.FC<LinksInfoProps> = () => {
  return (
    <Grid container spacing={ 2 }
      sx={ { borderBottom: '2px solid #F5F5F5', paddingBottom: '1.5rem' } }
    >
      <Grid item xs={ 12 } sm={ 4 } className="services-company">
        <Subtitle title="servicios" variant="h3" textTransform="uppercase" textColor="#F1F1F9" />
        <LinkList list={ SERVICES } />
      </Grid>
      <Grid item xs={ 12 } sm={ 4 } className="services-company">
        <Subtitle title="empresa" variant="h3" textTransform="uppercase" textColor="#F1F1F9" />
        <LinkList list={ COMPANY } />
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Subtitle title="información" variant="h3" textTransform="uppercase" padding="16px 16px 16px 0px" textColor="#F1F1F9" />
        <Typography sx={ { lineHeight: '26px', paddingBottom: '12px', fontSize: '14px' } }><LocationOnIcon /> Independencia 111, Buenos Aires, Argentina</Typography>
        <Typography sx={ { lineHeight: '25px', paddingBottom: '12px', fontSize: '14px' } }><WhatsAppIcon />+ 54 11 2222 3333</Typography>
        <Typography sx={ { lineHeight: '26px', paddingBottom: '12px', fontSize: '14px' } }><PhoneIcon /> + 54 11 3333 4444</Typography>
        <Typography sx={ { lineHeight: '26px', paddingBottom: '12px', fontSize: '14px' } }><EmailIcon /> info@appartamentos.com</Typography>
      </Grid>
    </Grid>
  )
}

export default LinksInfo