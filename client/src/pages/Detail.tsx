import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import DetailProperty from '../components/molecule/detail-property/DetailProperty'
import MainInfoProperty from '../components/molecule/main-info-property/MainInfoProperty'
import ContactProperty from '../components/molecule/contact-property/ContactProperty'
import BackButton from '../components/atom/BackButton'
import { EstateDetail } from '../model/estate-detail'
import { useSpinner } from '../context/SpinnerProvider'
import { estatesDetailList } from '../utils/EstatesDetailsList'

type DetailProps = {
}

const Detail: React.FC<DetailProps> = () => {
  const { addLoading, removeLoading } = useSpinner()
  const [estateById, setEstateById] = useState<EstateDetail>(estatesDetailList[0])
  const routeParams = useParams<{ id: string }>()

  useEffect(() => {
    addLoading()
    const filteredState = estatesDetailList.find((estate) => estate.estate_datail_id === +routeParams.id)
    setEstateById(filteredState)
    removeLoading()
  }, []);

  const {
    covered_area,
    uncovered_area,
    description,
    bedrooms,
    bathrooms,
    toilette,
    balcony,
    garage,
    swimming_pool,
    reception_hall,
    gym,
    antiquity,
    garden,
    terrace,
    grill,
    credit_worthy,
    professional_use,
    zone,
    services,
    rooms,
    name,
    address,
    price,
    estate_photos,
    for_sale
  } = estateById
  const filteredServices = Object.keys(services).filter(key => services[key])
  const totalArea = covered_area + uncovered_area

  return (
    <>
      <BackButton />
      <Box sx={ { padding: '8.5rem 0rem 5rem', background: '#F5F5F5' } }>
        <Container maxWidth="lg">
          <MainInfoProperty
            address={ address }
            name={ name }
            price={ price }
            totalArea={ totalArea }
            bedrooms={ bedrooms }
            bathrooms={ bathrooms }
            garage={ garage }
            garden={ garden }
            estatePhotos={ estate_photos }
            forSale={ for_sale }
          />
          <DetailProperty
            totalArea={ totalArea }
            coveredArea={ covered_area }
            description={ description }
            zone={ zone }
            services={ filteredServices }
            bedrooms={ bedrooms }
            bathrooms={ bathrooms }
            toilette={ toilette }
            balcony={ balcony }
            garage={ garage }
            swimmingPool={ swimming_pool }
            sum={ reception_hall }
            gym={ gym }
            years={ antiquity }
            garden={ garden }
            terrace={ terrace }
            grill={ grill }
            creditWorthy={ credit_worthy }
            professionalUse={ professional_use }
            rooms={ rooms }
          />
          <ContactProperty />
        </Container>
      </Box>
    </>
  )
}

export default Detail