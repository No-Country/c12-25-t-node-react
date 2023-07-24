import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import searchBanner from '../assets/search-banner.png'
import BackButton from '../components/atom/BackButton'
import SearchResults from '../components/template/search-results/SearchResults'
import jsonData from '../api/state-detail-mock.json'
import { useSearchParams } from 'react-router-dom'

type SearchProps = {}

const Search: React.FC<SearchProps> = () => {
  const [params] = useSearchParams()
  console.log(params.get('operation'))
  console.log(params.get('type'))
  console.log(params.get('city'))
  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={searchBanner} imgHeight="280px" />
      <SearchResults results={jsonData.estates_detail} />
    </>
  )
}

export default Search
