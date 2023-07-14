import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import favoriteBanner from '../assets/favorite-banner.png'
import BackButton from '../components/atom/BackButton'

type FavoritesProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Favorites: React.FC<FavoritesProps> = ({title}) => {
  */
}

const Favorites: React.FC<FavoritesProps> = () => {
  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={favoriteBanner} imgHeight="350px"/>
    </>
  )
}

export default Favorites