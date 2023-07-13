import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import SquareFootIcon from '@mui/icons-material/SquareFoot'
import BedIcon from '@mui/icons-material/Bed'
import BathtubIcon from '@mui/icons-material/Bathtub'
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled'
import IconButton from '@mui/material/IconButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PrimaryButton from '../atom/PrimaryButton'
import { Estates } from '../../pages/Home'

interface FeaturedCardProps {
  estate: Estates
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ estate }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/detail/${id}/?home=true`)

  const {
    id,
    description,
    adress,
    area,
    bedrooms,
    bathrooms,
    cars,
    image,
  } = estate

  return (
    <Card
      style={{ boxShadow: '0px 4px 10px grey' }}
      sx={{ maxWidth: 350, height: 378, borderRadius: 5, boxShadow: 3 }}
    >
      <CardMedia
        sx={{ height: 200, objectFit: 'fill' }}
        component="img"
        src={image}
        title="demo house"
      />
      <CardContent sx={{ position: 'relative', pb: 0 }}>
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
            fontSize: '0.8rem',
            letterSpacing: '1px',
          }}
          onClick={handleClick}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ marginTop: '1rem', minHeight: '52px' }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={'bold'}
            fontSize={'1rem'}
            marginTop={2}
            marginBottom={2}
          >
            {adress}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <SquareFootIcon className="primary-light" /><Typography>{area} m</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <BedIcon className="primary-light" /><Typography>{bedrooms}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <BathtubIcon className="primary-light" /><Typography>{bathrooms}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <DirectionsCarFilledIcon className="primary-light" /><Typography>{cars}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FeaturedCard
