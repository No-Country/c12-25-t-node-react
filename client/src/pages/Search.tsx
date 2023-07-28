import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import searchBanner from '../assets/search-banner.png'
import BackButton from '../components/atom/BackButton'
import SearchResults from '../components/template/search-results/SearchResults'

type SearchProps = {}

const Search: React.FC<SearchProps> = () => {
  return (
    <section>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={searchBanner} imgHeight="280px" />
      <SearchResults />
    </section>
  )
}

export default Search
