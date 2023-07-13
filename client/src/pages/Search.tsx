import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import searchBanner from '../assets/search-banner.png'

type SearchProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Search: React.FC<SearchProps> = ({title}) => {
  */
}

const Search: React.FC<SearchProps> = () => {
  return (
    <BannerAndBackgroundPage imgSrc={searchBanner} imgHeight="280px"/>
  )
}

export default Search