import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { variantText } from '../../utils/types'
import { stylesLogoText } from './LogoText.styles'

type LogoTextProps = {
  variant?:variantText
  white?: boolean
}

const LogoText: React.FC<LogoTextProps> = ({
  variant,
  white
}) => {
  return (
    <Typography variant={ variant ? variant : 'h4' } sx={ stylesLogoText.text } >
      <Link
        to="/"
        className="link-logo"
        aria-label="Página principal de Appartamentos"
      >
        <span className={ white ? 'white' : 'primary-light' }>App</span>
        <span className={ white ? 'white' : 'primary' }>artamentos</span>
      </Link>
    </Typography>
  )
}

export default LogoText
