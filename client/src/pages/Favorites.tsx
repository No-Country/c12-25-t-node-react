import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import favoriteBanner from '../assets/favorite-banner.png'
import BackButton from '../components/atom/BackButton'
import { estatesDetailList } from './../utils/EstatesDetailsList'
import CardsWithPagination from '../components/template/CardsWithPagination'

type FavoritesProps = {
}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={ favoriteBanner } imgHeight="350px" />
      <CardsWithPagination list={ estatesDetailList } />
    </>
  )
}

export default Favorites