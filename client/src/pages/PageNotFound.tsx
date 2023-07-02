type NotFoundProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const NotFound: React.FC<NotFoundProps> = ({title}) => {
  */
}

const NotFound: React.FC<NotFoundProps> = () => {  
  return (
    <main>Not Found</main>
  )
}

export default NotFound