import { TextField } from "@mui/material"

interface InputProps {
  inputLabel: string,
  inputName: string,
  inputValue: any,
  inputChange: any,
  inputError: any,
  inputHelper: any,

}

const InputForm: React.FC<InputProps> = ({
  inputLabel,
  inputName,
  inputValue,
  inputChange,
  inputError,
  inputHelper
}) => {
  return (
    <TextField
    label={inputLabel}
    name={inputName}
    value={inputValue}
    onChange={inputChange}
    error={inputError}
    helperText={inputHelper}
    fullWidth
    required
  />
  )
}

export default InputForm
