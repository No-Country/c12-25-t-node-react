import {
  Box,
  Typography,
  TypographyProps
} from '@mui/material'
import { alignText, transformText, variantText } from '../../utils/types'

interface SubtitleProps extends TypographyProps {
  title: string,
  titleBold?: string,
  titleBoldWeight?: string,
  textAlign?: alignText,
  fontWeight?: string,
  textTransform?: transformText,
  padding?: string,
  variant?: variantText,
  textColor?: string
}

const Subtitle: React.FC<SubtitleProps> = ({
  title,
  titleBold,
  titleBoldWeight,
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
        textAlign: `${ textAlign ? textAlign : 'left' }`,
        fontWeight: `${ fontWeight ? fontWeight : '500' }`,
        textTransform: `${ textTransform ? textTransform : 'none' }`,
        padding: `${ padding ? padding : '16px' }`,
        color: `${ textColor ? textColor : '#1B17E7' }`
      } }
      variant={ `${variant?variant: 'h2'}` }
    >
      { titleBold &&
        <>{ title } <Box component="span" sx={ { fontWeight: `${ titleBoldWeight?titleBoldWeight: '700' }` } }>{ titleBold }</Box> </>
      }
      { !titleBold && <>{ title }</> }
    </Typography>
  )
}

export default Subtitle