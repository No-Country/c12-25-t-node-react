import { useParams } from 'react-router-dom'

type DetailProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Detail: React.FC<DetailProps> = ({title}) => {
  */
}

const Detail: React.FC<DetailProps> = () => {
  const { id } = useParams() // para recuperar el id de la propiedad que viene por parametro
  
  return (
    <main>Detail</main>
  )
}

export default Detail