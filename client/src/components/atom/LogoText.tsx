import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type LogoTextProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const LogoText: React.FC<LogoTextProps> = ({ variant }) => {
  return (
    <Typography
      variant={variant ? variant : 'h4'}
      sx={{
        fontWeight: '900',
        fontSize: '1.75rem',
      }}
    >
      <Link to="/" className="link-logo">
        <span className="primary-light">App</span>
        <span className="primary">artamentos</span>
      </Link>
    </Typography>
  )
}

export default LogoText
