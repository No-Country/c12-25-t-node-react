import { ReactNode } from 'react'
import { Box, Button, ButtonProps } from '@mui/material'
import { colorBtn, sizeBtn, variantBtn } from '../../utils/types'

interface PrimaryButtonProps extends ButtonProps {
  text: string
  variant?: variantBtn
  size?: sizeBtn
  colorBtn?: colorBtn
  icon?: ReactNode
  textDisplay?: object
}

/**
 * PrimaryButton is a custom button
 * @param text: Text to be display in the button
 * @param variant: by default it's countained, with a background color
 * @param size: by default it's medium
 * @param colorBtn: by default it's primary
 * @param icon: a component that displays an icon
 * @param textDisplay: by default the button has a text, but with an object and
 * display:none we can hide the text
 */
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  variant,
  size,
  colorBtn,
  icon,
  textDisplay,
  ...props
}) => {
  return (
    <Button
      variant={variant ? variant : 'contained'}
      size={size ? size : 'medium'}
      color={colorBtn ? colorBtn : 'primary'}
      sx={{
        borderRadius: 2,
        paddingY: 1,
        paddingX: 1.5,
      }}
      {...props}
    >
      {icon}{' '}
      <Box
        component="span"
        sx={{ display: textDisplay ? textDisplay : 'flex' }}
      >
        {text}
      </Box>
    </Button>
  )
}

export default PrimaryButton
