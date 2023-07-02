import {
  Button,
  ButtonProps
} from '@mui/material'

type variantBtn = 'contained' | 'outlined' | 'text'

interface PrimaryButtonProps extends ButtonProps {
  text: string,
  variant?: variantBtn
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  variant,
  ...props
}) => {
  return (
    <Button
      variant={ variant ? variant : 'contained' }
      { ...props }
    >
      { text }
    </Button>
  )
}

export default PrimaryButton