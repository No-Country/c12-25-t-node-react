import { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

interface SelectorProps {
  placeholder: string
  label: string
  selectOptions: string[]
}

const Selector: React.FC<SelectorProps> = ({
  placeholder,
  label,
  selectOptions,
}) => {
  const [select, setSelect] = useState<string[]>([])
  const handleChange = (event: SelectChangeEvent<typeof select>) => {
    const {
      target: { value },
    } = event
    setSelect(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  const handleSelected = (selected: string[]) => {
    if (selected.length === 0) return <p>{placeholder}</p>
    else return selected.join(', ')
  }

  return (
    <div style={{ display: 'flex' }}>
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel
          id="demo-multiple-checkbox-label"
          sx={{ color: 'blue', fontWeight: '600', fontSize: '1.25rem' }}
        >
          {label}
        </InputLabel>
        <Select
          IconComponent={() => <ArrowDropDownIcon style={{ color: 'blue' }} />}
          displayEmpty
          fullWidth
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={select}
          onChange={handleChange}
          input={<OutlinedInput label={`${label}aaaaaaa`} />}
          renderValue={(selected) => handleSelected(selected)}
          MenuProps={MenuProps}
          sx={{
            boxShadow: 'none',
            '.MuiOutlinedInput-notchedOutline': { border: 0 },
          }}
        >
          {selectOptions.map((selection) => (
            <MenuItem key={selection} value={selection}>
              <Checkbox checked={select.indexOf(selection) > -1} />
              <ListItemText primary={selection} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Selector