import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from '@mui/material'
import { Email, WhatsApp } from '@mui/icons-material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useState } from 'react'
import PrimaryButton from '../../atom/PrimaryButton'
import Subtitle from '../../atom/Subtitle'
import ConfirmationModal from '../../molecule/confirmation-modal/ConfirmationModal'

interface CardsProps {
  image: string,
  name: string,
  lastName: string,
  position: string,
  isSpecialCard: boolean;
  whatsapp: string,
  mail: string
}

const handleEmailClick = (mail: string) => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${ mail }`;
  window.open(gmailUrl, '_blank');
}

const CardsAbout: React.FC<CardsProps> = ({
  image,
  name,
  lastName,
  position,
  isSpecialCard,
  whatsapp,
  mail
}) => {

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs('2023-07-12'))
  const [openDialog, setOpenDialog] = useState(false)
  const handleConfirm = () => setOpenDialog(true)
  const handleCloseDialog = () => setOpenDialog(false)

  return (
    <Card
      sx={ {
        width: { xs: '175px', sm: '270px' },
        height: { xs: 'auto', sm: '142px' },
        background: '#F5F5F5',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { lg: 'center' },
        alignItems: 'center',
        marginBottom: '20px',
        ...(isSpecialCard && {
          width: { lg: '100%', sm: '270px', xs: 'auto' },
          height: { xs: 'auto', sm: '324px' },
          flexDirection: { xs: 'row', sm: 'column' },
          justifyContent: 'flex-start',
        })
      } }
      className="card"
    >
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'row',
          gap: '6px',
          justifyContent: 'space-around',
          width: '100%'
        } }>
        <CardMedia
          component="img"
          image={ `./src/assets/personal/${ image }` }
          alt="Card Image"
          sx={ {
            width: isSpecialCard ? { xs: '100px', sm: '100px' } : { xs: '85px', sm: '100px' },
            height: isSpecialCard ? { xs: '100px', sm: '100px' } : { xs: '100px', sm: '100px' },
            margin: isSpecialCard ? { xs: '8px', sm: '19px' } : { xs: '5px', sm: '19px' },
            borderRadius: isSpecialCard ? { xs: '8px', sm: '0px' } : { xs: '8px', sm: '0px' },
            ...(isSpecialCard && {
              display: 'flex',
              alignSelf: { xs: 'center', sm: 'flex-start' },
            })
          } }
        />
        <Box
          sx={ {
            display: isSpecialCard ? { xs: 'none', sm: 'none' } : { xs: 'flex', sm: 'none' }, flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '8px',
            paddingRight: { xs: 'auto', sm: '12px' },
            marginTop: '5px',
            '@media (max-width: 330px)': { display: 'none' }
          } }
        >
          <IconButton color="secondary"
            size="small"
            onClick={ () => handleEmailClick(mail) }
            sx={ buttonStyleAbout }
            aria-label="Enviar un correo electrónico"
          >
            <Email fontSize="small" />
          </IconButton>
          <IconButton
            color="secondary"
            size="small"
            component="a"
            href={ `https://api.whatsapp.com/send?phone=${ whatsapp }` }
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enviar un mensjae de Whatsapp"
            sx={ buttonStyleAbout }
          >
            <WhatsApp fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <CardContent
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isSpecialCard ? 'space-between' : 'space-around',
          paddingTop: '22px',
          height: '100%',
          width: isSpecialCard ? '100%' : '100%',
          padding: '0 !important'
        } }
      >
        <Box
          sx={ {
            textAlign: isSpecialCard ? { xs: 'left', sm: ' center' } : { xs: 'center', sm: 'left' },
            padding: isSpecialCard ? { xs: '2px', sm: ' 5px 15px' } : { xs: '5px', sm: '10px 0px' },
            marginBottom: isSpecialCard ? { xs: '20px' } : {},
          } }
        >
          <Typography
            sx={ {
              color: '#1B17E7',
              fontSize: '14px',
              fontWeight: 'bold'
            } }
          >
            { name } { lastName }
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            { position }
          </Typography>
        </Box>
        { isSpecialCard ?
          (
            <Box
              sx={ {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                paddingRight: isSpecialCard ? '0px' : '14px',
              } }>
              <LocalizationProvider dateAdapter={ AdapterDayjs }>
                <DemoContainer
                  components={ ['MobileDatePicker'] }
                  sx={ {
                    fontFamily: 'Monserrat',
                    fontSize: { xs: '14px', sm: '16px' },
                    padding: { xs: '10px', sm: '5px' },
                    borderRadius: '10px',
                    marginBottom: isSpecialCard ? { xs: '0px', sm: '15px' } : { xs: '0px', sm: '0px' },
                  } }>
                  <MobileDatePicker
                    label="Solicitar reunion"
                    value={ selectedDate }
                    format='DD / MM / YYYY'
                    onChange={ (newValue) => setSelectedDate(newValue) }
                    onAccept={ handleConfirm }
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          ) : (
            <Box
              sx={ {
                display: { xs: 'none', sm: 'flex' },
                justifyContent: { xs: 'center', sm: 'flex-end' },
                alignItems: 'center',
                gap: '8px',
                paddingRight: { xs: 'auto', sm: '14px' },
                margin: { xs: '10px auto', sm: '0' },
                '@media (max-width: 330px)': { display: 'flex' }
              } }>
              <IconButton
                color="secondary"
                size="small"
                onClick={ () => handleEmailClick(mail) } sx={ buttonStyleAbout }
                aria-label="Enviar un correo electrónico"
              >
                <Email fontSize="small" />
              </IconButton>
              <IconButton color="secondary"
                size="small"
                component="a"
                href={ `https://api.whatsapp.com/send?phone=${ whatsapp }` }
                target="_blank"
                rel="noopener noreferrer"
                sx={ buttonStyleAbout }
                aria-label="Enviar un mensjae de Whatsap"
              >
                <WhatsApp fontSize="small" />
              </IconButton>
            </Box>
          ) }
      </CardContent>
      <ConfirmationModal
        selectedDate={ selectedDate!! }
        openDialog={ openDialog }
        handleCloseDialog={ handleCloseDialog }
      />
    </Card>
  )
}

export default CardsAbout

const buttonStyleAbout = {
  borderRadius: '5px',
  border: '1px solid #1DAEFF',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
}
