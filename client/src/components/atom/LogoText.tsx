import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type LogoTextProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  white?: boolean
}

const LogoText: React.FC<LogoTextProps> = ({
  variant,
  white
}) => {
  return (
    <Typography
      variant={ variant ? variant : 'h4' }
      sx={ {
        fontWeight: '900',
        fontSize: '1.5rem',
      } }
    >
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
