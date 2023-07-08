import { useState } from 'react'
import { useParams } from 'react-router-dom'
import statesDetailMock from '../api/state-detail-mock.json'
import TextBox from '../components/molecule/text-box/TextBox'
import DetailProperty from '../components/molecule/DetailProperty'

type DetailProps = {
}

const state_detail = {
  state_datail_id: 1,
  name: "Casa de 5 ambientes en Villa Urquiza",
  description: [
    "Casa de dos pisos con orientación oeste. Cuenta con 9 ambientes, gran living-comedor, cocina con doble mesada, lavadero espacioso , 2 baños completos, 5 dormitorios (dos de ellos con vestidor y balcón).",
    "Pisos de madera en combinación con porcelanato, aberturas de aluminio anodizado, cortina de enrollar en dormitorios, placares completos con interiores, calefacción prevista para colocación de estufa y agua caliente por termotanque a gas.",
    "Cocina con gran espacio de mesada en granito, bacha de acero inoxidable, cocina a gas instalada, mobiliario completo de bajo mesada más alacena, purificador y espacio técnico para heladera, microondas y lavarropas.",
    "Baños con ventilación natural, loza sanitaria y griferías de primeras marcas, vanitory incorporado con espejo y accesorios colocados, bañera y revestimiento en paredes.",
    "Jardín arbolado con cítricos y amplio espacio para incorporar pileta y asador."
  ],
  zone: "Situada en Villa Urquiza, barrio residencial rodeado de una amplia oferta comercial, gastronómica y recreativa. La casa se encuentra ubicada a una cuadra de plaza Zapiola y a cinco cuadras de  estación Juan Manuel de Rosas de la Línea B de subterráneo.",
  address: "Av. Monroe 4551",
  city: "Villa Urquiza",
  province: "Capital Federal",
  country: "Argentina",
  price: 360000,
  available: true,
  covered_area: 300,
  uncoverd_area: 20,
  bedrooms: 5,
  bathrooms: 2,
  toilette: 1,
  garage: 1,
  swimming_pool: 1,
  reception_hall: 1,
  balcony: 1,
  elevator: 0,
  gym: 0,
  antiquity: 3,
  state_id: 1,
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
  ]
}
const Detail: React.FC<DetailProps> = () => {
  // const { id } = useParams()
  // TODO: cuando este la parte dle back hay que buscar la propiedad por el id y ahi setear el estado
  const [stateById, setStateById] = useState(state_detail)
  const { description } = stateById

  return (
    <>
      <DetailProperty description={ description } />
    </>
  )
}

export default Detail