import { Link } from 'react-router-dom'
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
      sx={ {
        borderBottom: '2px solid #F5F5F5',
        paddingBottom: '1.5rem'
      } }
    >
      <Grid item xs={ 12 } sm={ 4 }>
        <Subtitle title="servicios" />
        <LinkList list={SERVICES} />
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Subtitle title="empresa" />
        <LinkList list={COMPANY} />
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Subtitle title="información" padding="16px 16px 16px 0px" />
        <Typography sx={ { lineHeight: '34px' } }><LocationOnIcon /> Direccción de la oficina</Typography>
        <Typography sx={ { lineHeight: '34px' } }><WhatsAppIcon /> Whatsapp de contacto</Typography>
        <Typography sx={ { lineHeight: '34px' } }><PhoneIcon /> Teléfono de contacto</Typography>
        <Typography sx={ { lineHeight: '34px' } }><EmailIcon /> Correo de contacto</Typography>
      </Grid>
    </Grid>
  )
}

export default LinksInfo