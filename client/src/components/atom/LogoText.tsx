import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type LogoTextProps = {
}

const LogoText: React.FC<LogoTextProps> = () => {
  return (
    <Typography sx={ {
      fontWeight: '900',
      letterSpacing: '1px',
      fontSize: '1.75rem'
    } }>
      <Link to="/" className="link-logo">
        <span className="primary-light">App</span><span className="primary">artamentos</span>
      </Link>
    </Typography>


  )
}

export default LogoText