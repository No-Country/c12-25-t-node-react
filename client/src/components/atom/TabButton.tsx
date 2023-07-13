import { Button, ButtonProps } from '@mui/material'
import { useState } from 'react'

const [isPressed, setIsPressed] = useState(false)
type variantBtn = 'contained' | 'outlined' | 'text'
type sizeBtn = 'small' | 'medium' | 'large'
type colorBtn =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'

interface TabButtonProps extends ButtonProps {
  text: string
  variant?: variantBtn
  size?: sizeBtn
  colorBtn?: colorBtn
}

const TabButton: React.FC<TabButtonProps> = ({
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

export default TabButton
