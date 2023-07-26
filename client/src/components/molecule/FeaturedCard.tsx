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
import { EstateDetail } from '../../model/estate-detail'
import { stylesFeaturedCard } from './FeaturedCard.styles'
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { getAuth } from 'firebase/auth'

interface FeaturedCardProps {
  estate: EstateDetail
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ estate }) => {
  const navigate = useNavigate()
  const {
    estate_datail_id,
    name,
    address,
    covered_area,
    uncovered_area,
    bedrooms,
    bathrooms,
    garage,
    estate_photos,
  } = estate

  const handleClick = () => navigate(`/detail/${estate_datail_id}`)

  const image = estate_photos[0]?.url
  const alt = estate_photos[0]?.alt
  const auth = getAuth()
  const totalArea = covered_area + uncovered_area

  const [isFavorite, setIsFavorite] = useState(false)
  const db = getFirestore()

  useEffect(() => {
    console.log('useEffect')
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('Usuario autenticado:', user)
        checkFavoriteStatus(user.uid)
      } else {
        console.log('Usuario no autenticado.')
        setIsFavorite(false)
      }
    })

    return () => {
      console.log('Cierre de sesion.')
      unsubscribe()
    }
  }, [estate_datail_id, auth])

  const checkFavoriteStatus = async (userId: string) => {
    const userFavoriteRef = doc(db, 'usersFavorites', userId)
    try {
      const docSnapshot = await getDoc(userFavoriteRef)

      if (docSnapshot.exists()) {
        const favoriteIds = docSnapshot.data()?.favoriteIds
        setIsFavorite(favoriteIds?.includes(estate_datail_id) || false)
      } else {
        setIsFavorite(false)
      }
    } catch (error) {
      console.error(
        'Error al obtener la información de favoritos del usuario:',
        error
      )
    }
  }

  const handleFavoriteClick = async () => {
    const user = auth.currentUser
    if (!user) {
      console.log('Debe iniciar sesión para agregar o eliminar de favoritos.')
      return
    }
    const userFavoriteRef = doc(db, 'usersFavorites', user.uid)
    try {
      if (isFavorite) {
        await updateDoc(userFavoriteRef, {
          favoriteIds: arrayRemove(estate_datail_id),
        })
        setIsFavorite(false)
        console.log('Objeto eliminado de favoritos en Firebase')
      } else {
        await setDoc(
          userFavoriteRef,
          { favoriteIds: arrayUnion(estate_datail_id) },
          { merge: true }
        )
        setIsFavorite(true)
        console.log('Objeto agregado a favoritos en Firebase')
      }
    } catch (error) {
      console.error(
        'Error al agregar o eliminar de favoritos en Firebase:',
        error
      )
    }
  }

  return (
    <Card sx={stylesFeaturedCard.card}>
      <CardMedia
        sx={stylesFeaturedCard.cardMedia}
        component="img"
        src={image}
        title={alt}
      />
      <CardContent sx={stylesFeaturedCard.cardContext}>
        <IconButton
          size="small"
          sx={stylesFeaturedCard.iconButton}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <PrimaryButton
          text="Ver más"
          sx={stylesFeaturedCard.primaryButton}
          onClick={handleClick}
        />
        <Box sx={stylesFeaturedCard.box}>
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ marginTop: '1rem', minHeight: '52px' }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            fontWeight={'bold'}
            fontSize={'1rem'}
            marginTop={2}
            marginBottom={2}
          >
            {address}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <SquareFootIcon className="primary-light" />
              <Typography>{totalArea} m</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <BedIcon className="primary-light" />
              <Typography>{bedrooms}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <BathtubIcon className="primary-light" />
              <Typography>{bathrooms}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <DirectionsCarFilledIcon className="primary-light" />
              <Typography>{garage}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FeaturedCard
