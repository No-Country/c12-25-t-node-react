import  { Container } from '@mui/material'
import Subtitle from '../atom/Subtitle'
import Text from './text/Text'

type DetailPropertyProps = {
  description: string[]
}

const DetailProperty: React.FC<DetailPropertyProps> = ({description}) => {
  return (
    <Container maxWidth="lg" sx={{paddingBottom: '4rem'}}>
      <Subtitle title="La propiedad"/>
      <Text textToShow={description} paddingText="16px 16px 0px"/>
    </Container>
  )
}

export default DetailProperty