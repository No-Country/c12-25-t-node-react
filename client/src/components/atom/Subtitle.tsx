import { 
  Typography, 
  TypographyProps 
} from '@mui/material'

type alignText = 'center' | 'inherit' | 'justify' | 'left' | 'right'
type transformText = 'none' | 'capitalize' | 'uppercase' | 'lowercase' 

interface SubtitleProps extends TypographyProps {
  title: string,
  align?: alignText,
  fontWeight?: string,
  textTransform?: transformText,
  padding?: string,
}

const Subtitle: React.FC<SubtitleProps> = ({
  title,
  align,
  fontWeight,
  textTransform,
  padding
}) => {
  return (
    <Typography
      sx={ {
        align: `${align? align: 'left'}`,
        fontWeight: `${ fontWeight ? fontWeight : '800' }`,
        textTransform: `${ textTransform ? textTransform : 'uppercase' }`,
        padding: `${ padding ? padding : '16px !important' }`
      } }
      variant="h2"
    >
      { title }
    </Typography>
  )
}

export default Subtitle