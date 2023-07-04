import { 
  Typography, 
  TypographyProps 
} from '@mui/material'

type alignText = 'center' | 'inherit' | 'justify' | 'left' | 'right'
type transformText = 'none' | 'capitalize' | 'uppercase' | 'lowercase' 
type variantText = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface SubtitleProps extends TypographyProps {
  title: string,
  textAlign?: alignText,
  fontWeight?: string,
  textTransform?: transformText,
  padding?: string,
  variant: variantText,
  textColor?: string
}

const Subtitle: React.FC<SubtitleProps> = ({
  title,
  textAlign,
  fontWeight,
  textTransform,
  padding,
  variant,
  textColor
}) => {
  return (
    <Typography
      sx={ {
        textAlign: `${textAlign? textAlign: 'left'}`,
        fontWeight: `${ fontWeight ? fontWeight : '800' }`,
        textTransform: `${ textTransform ? textTransform : 'uppercase' }`,
        padding: `${ padding ? padding : '16px !important' }`,
        color: `${textColor ? textColor: 'primary'}`
      } }
      variant={variant}
    >
      { title }
    </Typography>
  )
}

export default Subtitle