import {
  Box,
  TextField,
  Typography
} from '@mui/material'
import { stylesInputForm} from './InputForm.styles'

interface InputProps {
  inputLabel: string
  inputName: string
  inputValue: any
  inputChange: any
  inputError: any
  inputHelper: any
  labelText: string
}

const InputForm: React.FC<InputProps> = ({
  inputLabel,
  inputName,
  inputValue,
  inputChange,
  inputError,
  inputHelper,
  labelText
}) => {
  return (
    <Box sx={ { marginBottom: '23px' } }>
      <Typography variant="body1" sx={ stylesInputForm.text }>{ labelText }</Typography>
      <TextField
        label={ inputLabel }
        name={ inputName }
        value={ inputValue }
        onChange={ inputChange }
        error={ inputError }
        helperText={ inputHelper }
        fullWidth
        required
      />
    </Box>
  )
}

export default InputForm
