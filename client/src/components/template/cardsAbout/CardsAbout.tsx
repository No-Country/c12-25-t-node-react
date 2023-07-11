import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { Email, WhatsApp } from '@mui/icons-material';
import PrimaryButton from '../../atom/PrimaryButton';

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
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${mail}`;
  window.open(gmailUrl, '_blank');
};

const CardsAbout: React.FC<CardsProps> = ({
  image,
  name,
  lastName,
  position,
  isSpecialCard,
  whatsapp,
  mail
}) => {

  return (
    <Card sx={{
      width: { xs: '175px', sm: '305px' },
      height: { xs: 'auto', sm: '142px' },
      background: '#F5F5F5',
      borderRadius: '10px',
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      justifyContent: { lg: 'center' },
      alignItems: 'center',
      marginBottom: '20px',
      margin: { xs: '20px 10px', sm: '20px 0' },
      ...(isSpecialCard && {
        width: { xs: '370px', sm: '305px' },
        height: { xs: 'auto', sm: '324px' },
        flexDirection: { xs: 'row', sm: 'column' },
        justifyContent: 'flex-start',
      })
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'space-around', width: '100%' }}>
        <CardMedia
          component="img"
          image={`./src/assets/personal/${image}`}
          alt="Card Image"
          sx={{
            width: isSpecialCard ? { xs: '100px', sm: '100px' } : { xs: '85px', sm: '100px' },
            height: isSpecialCard ? { xs: '122px', sm: '100px' } : { xs: '100px', sm: '100px' },
            margin: isSpecialCard ? { xs: '19px', sm: '19px' } : { xs: '5px', sm: '19px' },
            borderRadius: isSpecialCard ? { xs: '8px', sm: '0px' } : { xs: '8px', sm: '0px' },
            ...(isSpecialCard && {
              display: 'flex',
              alignSelf: { xs: 'center', sm: 'flex-start' },
            })
          }}
        />
        <Box sx={{ display: isSpecialCard ? { xs: 'none', sm: 'none' } : { xs: 'flex', sm: 'none' }, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', paddingRight: { xs: 'auto', sm: '14px' }, marginTop: '5px', '@media (max-width: 330px)': { display: 'none' } }}>
          <IconButton color="secondary"
            size="small"
            onClick={() => handleEmailClick(mail)} sx={buttonStyleAbout}>
            <Email fontSize="small" />
          </IconButton>
          <IconButton color="secondary"
            size="small"
            component="a" href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer" sx={buttonStyleAbout}>
            <WhatsApp fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isSpecialCard ? 'space-between' : 'space-around',
          paddingTop: '22px',
          height: '100%',
          width: '100%',
          padding: '0 !important'
        }}
      >
        <Box
          sx={{
            textAlign: isSpecialCard ? { xs: 'left', sm: ' left' } : { xs: 'center', sm: 'left' },
            padding: isSpecialCard ? { xs: '5px', sm: ' 5px 15px' } : { xs: '5px', sm: '10px 0px' },
            marginBottom: isSpecialCard ? { xs: '20px' } : {},
          }}
        >
          <Typography variant="h5" component="div" sx={{ color: '#1B17E7', fontSize: '16px', fontWeight: 'bold' }}>
            {name} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {position}
          </Typography>
        </Box>
        {isSpecialCard ? (
          <Box sx={{ display: 'flex', justifyContent: isSpecialCard ? 'flex-end' : 'center', alignItems: 'center', gap: '8px', paddingRight: '14px' }}>
            <PrimaryButton
              text={"Solicitar Reunion"}
              sx={{
                fontFamily: 'Monserrat',
                fontSize: { xs: '14px', sm: '16px' },
                padding: { xs: '10px', sm: '20px' },
                borderRadius: '10px',
                marginBottom: isSpecialCard ? { xs: '0px', sm: '15px' } : { xs: '0px', sm: '0px' },
              }}
            />
          </Box>
        ) : (
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: { xs: 'center', sm: 'flex-end' }, alignItems: 'center', gap: '8px', paddingRight: { xs: 'auto', sm: '14px' }, margin: { xs: '10px auto', sm: '0' }, '@media (max-width: 330px)': { display: 'flex' } }}>
            <IconButton color="secondary"
              size="small"
              onClick={() => handleEmailClick(mail)} sx={buttonStyleAbout}>
              <Email fontSize="small" />
            </IconButton>
            <IconButton color="secondary"
              size="small"
              component="a" href={`https://api.whatsapp.com/send?phone=${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer" sx={buttonStyleAbout}>
              <WhatsApp fontSize="small" />
            </IconButton>

          </Box>
        )}
      </CardContent>

    </Card>

  )

}

export default CardsAbout

const buttonStyleAbout = {
  borderRadius: '5px',
  border: '1px solid #1DAEFF',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
}
