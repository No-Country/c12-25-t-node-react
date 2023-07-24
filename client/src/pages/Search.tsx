import { useState } from 'react'
import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import searchBanner from '../assets/search-banner.png'
import BackButton from '../components/atom/BackButton'
import SearchResults from '../components/template/search-results/SearchResults'
import jsonData from '../api/state-detail-mock.json'
import { EstateDetail } from '../model/estate-detail'

type SearchProps = {
}

const Search: React.FC<SearchProps> = () => {
  const [searchResults, setSearchResults] = useState<EstateDetail[]>(jsonData.estates_detail)

  return (
    <section>
      <BackButton />
      <BannerAndBackgroundPage
        imgSrc={ searchBanner }
        imgHeight="280px"
      />
      <SearchResults results={ searchResults } setSearchResults={setSearchResults}/>
    </section>
  )
}

export default Search