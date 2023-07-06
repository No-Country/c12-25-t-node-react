import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import favoriteBanner from '../assets/favorite-banner.png'

type FavoritesProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Favorites: React.FC<FavoritesProps> = ({title}) => {
  */
}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={favoriteBanner} imgHeight="200px"/>
  )
}

export default Favorites