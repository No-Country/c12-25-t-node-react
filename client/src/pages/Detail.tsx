import { useState, useEffect } from 'react'
import { useParams  } from 'react-router-dom'
import { Container } from '@mui/material'
import DetailProperty from '../components/molecule/detail-property/DetailProperty'
import jsonData from '../api/state-detail-mock.json'

type DetailProps = {
}

const stateDetail = {
  state_datail_id: 1,
  name: "Casa de 5 ambientes en Villa Urquiza",
  description: "Casa de dos pisos con orientación oeste. Cuenta con 9 ambientes, gran living-comedor, cocina con doble mesada, lavadero espacioso , 2 baños completos, 5 dormitorios (dos de ellos con vestidor y balcón). Pisos de madera en combinación con porcelanato, aberturas de aluminio anodizado, cortina de enrollar en dormitorios, placares completos con interiores, calefacción prevista para colocación de estufa y agua caliente por termotanque a gas. Cocina con gran espacio de mesada en granito, bacha de acero inoxidable, cocina a gas instalada, mobiliario completo de bajo mesada más alacena, purificador y espacio técnico para heladera, microondas y lavarropas. Baños con ventilación natural, loza sanitaria y griferías de primeras marcas, vanitory incorporado con espejo y accesorios colocados, bañera y revestimiento en paredes. Jardín arbolado con cítricos y amplio espacio para incorporar pileta y asador."
  ,
  zone: "Esta propiedad se encuentra situada en Villa Urquiza, un histórico barrio residencial que complementa su vida familiar, con una amplia oferta comercial, gastronómica y recreativa. Ubicado estrategicamente a una cuadra de plaza Zapiola y a cinco cuadras de la estación Juan Manuel de Rosas de la línea B de subterráneos, el inmueble posee gran conectividad con toda la ciudad.",
  city: "Villa Urquiza",
  province: "Capital Federal",
  country: "Argentina",
  price: 360000,
  available: true,
  covered_area: 600,
  uncoverd_area: 80,
  bedrooms: 5,
  bathrooms: 2,
  toilette: 1,
  garage: 1,
  swimming_pool: 1,
  reception_hall: 0,
  balcony: 1,
  elevator: 0,
  gym: 0,
  antiquity: 3,
  state_id: 1,
  garden: true,
  terrance: true,
  grill: 0,
  credit_worthy: true,
  professional_use: true,
  state_photos: [
    {
      state_photo_id: 1,
      url: "https://picsum.photos/id/208/367/267"
    },
    {
      state_photo_id: 2,
      url: "https://picsum.photos/id/193/3578/2451"
    },
    {
      state_photo_id: 3,
      url: "https://picsum.photos/id/217/367/267"
    }
  ],
  services: {
    "agua": true,
    "eletricidad": true,
    "telefono": true,
    "gas": true,
    "internet": true,
    "alarma": true,
    "ascensor": false
  },
  rooms: {
    "cocina": 1,
    "comedor": 1,
    "living": 1,
    "baños": 2,
    "dormitorios": 5,
    "toilet": 1,
    "garage:": 2,
    "terraza": 1,
    "pileta": 1,
    "jardin": 1,
    "SUM": 0
  }
}

const Detail: React.FC<DetailProps> = () => {
  // TODO: cuando este la parte del back hay que buscar la propiedad por el id y ahi setear el estado
  const [stateById, setStateById] = useState(stateDetail)
  const params = useParams<{ id: string }>();
  const id: number = parseInt(params.id, 10); // Convertir a númer

  /*
  De esta manera, parsedParamValue será de tipo number si el parámetro existe y tiene un valor numérico válido. Si el parámetro está ausente o no se puede convertir a number, parsedParamValue será NaN.
  */

  useEffect(() => {
    const filteredState = jsonData.states_detail.find(
      (state) => state.state_datail_id === id
    )
    if(filteredState === null) setStateById({})
    setStateById(filteredState);
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
    rooms
  } = stateById
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
    <Container maxWidth="lg" sx={ { paddingBottom: '4rem' } }>
      <DetailProperty
        totalArea={ totalArea }
        coveredArea={ covered_area }
        description={ descriptionText }
        zone={ zoneText }
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
    </Container>
  )
}

export default Detail