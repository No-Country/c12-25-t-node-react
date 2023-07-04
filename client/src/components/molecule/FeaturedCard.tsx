import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import SquareFootIcon from '@mui/icons-material/SquareFoot'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import PrimaryButton from '../atom/PrimaryButton'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const FeaturedCard = () => {
  return (
    <Card
      style={{ boxShadow: '0px 4px 10px grey' }}
      sx={{ maxWidth: 400, borderRadius: 5 }}
    >
      <CardMedia
        sx={{ height: 200, objectFit: 'fill' }}
        component="img"
        src="https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg"
        title="demo house"
      />
      <CardContent sx={{ position: 'relative' }}>
        <IconButton
          size="small"
          sx={{
            position: 'absolute',
            right: -1,
            top: -180,
            marginRight: 1,
            backgroundColor: 'white',
            borderRadius: 3,
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <PrimaryButton
          text="Ver más"
          sx={{
            position: 'absolute',
            top: -20,
            right: -1,
            marginRight: 2,
            display: 'inline-block',
            paddingY: 1,
            paddingX: 1.5,
            fontSize: '0.8rem',
            borderRadius: 3,
          }}
        />
        <Typography variant="body1" color="text.primary">
          Casa 5 dormitorios en Villa Urquiza
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          fontWeight={'bold'}
          fontSize={'1rem'}
          marginTop={2}
          marginBottom={2}
        >
          Av. Monroe 4511
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <SquareFootIcon className="primary-light" />
            <Typography>680 m</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <BedIcon className="primary-light" />
            <Typography>5</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <BathtubIcon className="primary-light" />
            <Typography>2</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <DirectionsCarFilledIcon className="primary-light" />
            <Typography>2</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
export default FeaturedCard
