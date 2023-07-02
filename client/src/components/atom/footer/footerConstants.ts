import LocationOnIcon from '@mui/icons-material/LocationOn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'

export const SERVICES = [
  {
    text: 'Compra',
    to: '/search'
  },
  {
    text: 'Alquiler',
    to: '/search'
  },
  {
    text: 'Alquiler temporario',
    to: '/search'
  }
]

export const COMPANY = [
  {
    text: 'Quienes somos',
    to: '/about'
  },
  {
    text: 'Contacto',
    to: '/contact'
  }
]

export const INFO = [
  {
    text: 'Direccción de la oficina',
    icon: `${ LocationOnIcon }`
  },
  {
    text: 'Whatsapp de contacto',
    icon: `${ WhatsAppIcon }`
  },
  {
    text: 'Teléfono de contacto',
    icon: `${ PhoneIcon }`
  },
  {
    text: 'Mail de contacto',
    icon: `${ EmailIcon }`
  }
]