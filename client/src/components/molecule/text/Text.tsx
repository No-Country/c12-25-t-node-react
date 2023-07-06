import { Box, Typography } from '@mui/material'
import { arrayText } from '../../../utils/types'

type TextProps = {
  textToShow?: arrayText,
  paddingText?: string
}

const Text: React.FC<TextProps> = ({
  textToShow,
  paddingText
}) => {
  return (
    <Box >
      { textToShow && textToShow.map(text => <Typography key={`${text.slice(0,9)}`} sx={ { padding: `${ paddingText ? paddingText : '16px' }` } }>{ text }</Typography>) }
    </Box>
  )
}

export default Text