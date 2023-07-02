import { Container } from '@mui/material'
import LogoSocialMedia from './LogoSocialMedia'
import LinksInfoMedia from './LinksInfo'
import './Footer.styles.css'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <LogoSocialMedia />
        <LinksInfoMedia />
      </Container>
    </footer>
  )
}

export default Footer