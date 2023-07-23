import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage'
import searchBanner from '../assets/search-banner.png'
import BackButton from '../components/atom/BackButton'
import SearchMenu from '../components/template/search-menu/SearchMenu'
import SearchResults from '../components/template/search-results/SearchResults'
import jsonData from '../api/state-detail-mock.json'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EstateDetail } from '../model/estate-detail'
import { getAllEstateDetails } from '../components/firebase/database'

type SearchProps = {
}

const Search: React.FC<SearchProps> = () => {

  const [estateDetails, setEstateDetails] = useState<EstateDetail[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchEstateDetails() {
      try {
        const details = await getAllEstateDetails();
        setEstateDetails(details);
      } catch (error) {
        console.error('Error al obtener los detalles de las propiedades:', error);
      }
    }

    fetchEstateDetails();
  }, []);
  
  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage
        imgSrc={ searchBanner }
        imgHeight="280px"
      />
      <SearchMenu />
      <SearchResults results={estateDetails} />
    </>

  )
}

export default Search