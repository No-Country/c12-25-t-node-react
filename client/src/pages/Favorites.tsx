import { useEffect, useState } from 'react'
import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import favoriteBanner from '../assets/favorite-banner.png'
import BackButton from '../components/atom/BackButton'
import { estatesDetailList } from './../utils/EstatesDetailsList'
import CardsWithPagination from '../components/template/CardsWithPagination'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { useSpinner } from '../context/SpinnerProvider'
import SkeletonMessage from '../components/atom/SkeletonMessage'
import { Container } from '@mui/material'

type FavoritesProps = {}
const db = getFirestore()
const auth = getAuth()

const Favorites: React.FC<FavoritesProps> = () => {
  const { addLoading, removeLoading } = useSpinner()

  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  const checkFavoriteStatus = async (userId: string) => {
    const userFavoriteRef = doc(db, 'usersFavorites', userId)
    try {
      const docSnapshot = await getDoc(userFavoriteRef)
      if (docSnapshot.exists()) {
        setFavoriteIds(docSnapshot.data()?.favoriteIds)
      }
    } catch (error) {
      console.error(
        'Error al obtener la información de favoritos del usuario:',
        error
      )
    }
  }

  useEffect(() => {
    addLoading()
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkFavoriteStatus(user.uid)
      }
    })
    removeLoading()
    return () => {
      unsubscribe()
    }
  }, [])
  const filteredFav = estatesDetailList.filter((estate) =>
    favoriteIds.includes(estate.estate_id)
  )

  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={favoriteBanner} imgHeight="350px" />
      {filteredFav.length === 0 ? (
        <Container maxWidth="lg" sx={{ marginTop: '3rem' }}>
          <SkeletonMessage messageText="No tienes favoritos todavía" />
        </Container>
      ) : (
        <CardsWithPagination list={filteredFav} />
      )}
    </>
  )
}

export default Favorites
