import BackButton from '../components/atom/BackButton'
import SearchResults from '../components/template/search-results/SearchResults'
import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'

type SearchProps = {}

const Search: React.FC<SearchProps> = () => {
  return (
    <section>
      <BackButton />
      <BannerAndBackgroundPage
        imgSrc='https://i.postimg.cc/Xq5nGVFZ/search-banner.png'
        imgHeight="280px"
      />
      <SearchResults />
    </section>
  )
}

export default Search
