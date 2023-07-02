import { Container } from '@mui/material'
import './Footer.styles.css'
import LogoSocialMedia from './LogoSocialMedia'

type FooterProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Footer: React.FC<FooterProps> = ({title}) => {
  */
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <LogoSocialMedia />
      </Container>
    </footer>
  )
}

export default Footer