import { Button, ButtonProps } from '@mui/material'

interface PrimaryButtonProps extends ButtonProps {
  text: string,
  variant?: 'contained' | 'outlined' | 'text'
}


//TODO: agregar todo lo necesario para que sea un boton reutilizable
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, variant, ...props }) => {
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