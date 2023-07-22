import { Button, ButtonProps } from '@mui/material'
import { colorBtn, sizeBtn, variantBtn } from '../../utils/types'

interface PrimaryButtonProps extends ButtonProps {
  text: string
  variant?: variantBtn
  size?: sizeBtn
  colorBtn?: colorBtn
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  variant,
  size,
  colorBtn,
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
      {text}
    </Button>
  )
}

export default PrimaryButton
