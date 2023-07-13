import {
  Box,
  TextField,
  Typography
} from '@mui/material'

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
      <Typography variant="body1" sx={ styleText }>
        { labelText }
      </Typography>
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

const styleText = {
  color: '#0C0C39',
  fontSize: '16px',
  fontWeight: '600',
  textAlign: 'left',
  padding: '0px 2px 6px'
}