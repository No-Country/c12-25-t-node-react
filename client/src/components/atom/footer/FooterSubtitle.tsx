import { Typography } from '@mui/material'

type FooterSubtitleProps = {
  title: string
}

const FooterSubtitle: React.FC<FooterSubtitleProps> = ({ title }) => {
  return (
    <Typography sx={ {
      fontWeight: '800',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      paddingLeft: '16px !important'
    } }>
      { title }
    </Typography>
  )
}

export default FooterSubtitle