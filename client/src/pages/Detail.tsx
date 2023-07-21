import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import DetailProperty from '../components/molecule/detail-property/DetailProperty'
import jsonData from '../api/state-detail-mock.json'
import MainInfoProperty from '../components/molecule/main-info-property/MainInfoProperty'
import ContactProperty from '../components/molecule/contact-property/ContactProperty'
import BackButton from '../components/atom/BackButton'
import { estateDetail } from '../utils/state-detail'
import { EstateDetail } from '../model/estate-detail'

type DetailProps = {
}

const Detail: React.FC<DetailProps> = () => {
  // TODO: cuando este la parte del back hay que buscar la propiedad por el id y ahi setear el estado
  const [estateById, setEstateById] = useState<EstateDetail>(estateDetail)
  const routeParams = useParams<{ id: string }>()
  const id: number = parseInt(routeParams.id, 10)
  /* De esta manera, id será de tipo number si el parámetro existe y tiene un valor numérico válido. Si el parámetro está ausente o no se puede convertir a number, id será NaN. */
  const [params] = useSearchParams()

  useEffect(() => {
    const filteredState = jsonData.estates_detail.find(
      (estate) => estate.estate_datail_id === id
    )
    if (filteredState === null) setEstateById({})
    setEstateById(filteredState);
  }, [id]);

  const {
    covered_area,
    uncoverd_area,
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
    terrance,
    grill,
    credit_worthy,
    professional_use,
    zone,
    services,
    rooms,
    name,
    address,
    price,
    estate_photos
  } = estateById
  const textToArrayText = (text: string) => {
    const arrayText = text.split('.').map((item, index, array) => {
      if (index === array.length - 1) return item.trim()
      return item.trim() + '.'
    })
    return arrayText
  }
  const descriptionText = textToArrayText(description)
  const zoneText = textToArrayText(zone)
  const filteredServices = Object.keys(services).filter(key => services[key])
  const totalArea = covered_area + uncoverd_area

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
            terrance={ terrance }
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