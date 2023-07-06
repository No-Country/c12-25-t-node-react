import { Box, Typography } from '@mui/material'
import Subtitle from '../../atom/Subtitle'
import { alignText, arrayText, transformText, variantText } from '../../../utils/types'

type TitleTextProps = {
  title: string,
  titleBold?: string,
  titleBoldWeight?: string,
  textAlign?: alignText,
  fontWeight?: string,
  textTransform?: transformText,
  padding?: string,
  variant: variantText,
  textColor?: string,
  textToShow?: arrayText,
  paddingText?: string
}

const TitleText: React.FC<TitleTextProps> = ({
  title,
  titleBold,
  titleBoldWeight,
  textAlign,
  fontWeight,
  textTransform,
  padding,
  variant,
  textColor,
  textToShow,
  paddingText
}) => {
  return (
    <Box >
      <Subtitle
        title={ title }
        fontWeight={ fontWeight ? fontWeight : '500' }
        titleBold={ titleBold ? titleBold : '' }
        titleBoldWeight={ titleBoldWeight ? titleBoldWeight : '600' }
        variant={ variant ? variant : 'h2' }
        textColor={ textColor ? textColor : '#1B17E7' }
        textAlign={ textAlign ? textAlign : 'left' }
        textTransform={ textTransform ? textTransform : 'none' }
        padding={ padding ? padding : '16px' }
      />
      { textToShow && textToShow.map(text => <Typography sx={ { padding: `${ paddingText ? paddingText : '16px' }` } }>{ text }</Typography>) }
    </Box>
  )
}

export default TitleText