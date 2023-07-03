import { Container } from '@mui/material'
import LogoSocialMedia from './LogoSocialMedia'
import LinksInfo from './LinksInfo'
import CopyrightTermsConditions from './CopyrightTermsConditions'
import './Footer.styles.css'

type FooterProps = {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <LogoSocialMedia />
        <LinksInfo />
        <CopyrightTermsConditions />
      </Container>
    </footer>
  )
}

export default Footer