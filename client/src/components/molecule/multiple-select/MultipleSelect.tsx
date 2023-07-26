import * as React from 'react'
import {
  Checkbox,
  InputLabel,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { stylesMultipleSelect } from './MultipleSelect.styles'
import './MultipleSelect.css'

const ITEM_HEIGHT = 40
const ITEM_PADDING_TOP = 4
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

interface MultipleSelectProps {
  textToDisplay: string
  listOptions?: string[]
  options: any[]
  setOptions: (item: any) => void
}

/**
 * A MultipleSelect component to be used in a search
 * @prop textToDisplay: the string to display at the top of the select
 * @prop listOptions: the list of options to select
 * @prop options: the state to keep the options selected
 * @prop setOptions: the SetStateAction to update the options selected
 */
const MultipleSelect: React.FC<MultipleSelectProps> = ({
  textToDisplay,
  listOptions,
  options,
  setOptions,
}) => {
  const handleChange = (event: SelectChangeEvent<typeof options>) => {
    const {
      target: { value },
    } = event
    setOptions(value)
  }

  return (
    <div>
      <FormControl sx={stylesMultipleSelect.formcontrol}>
        <InputLabel
          id={`${textToDisplay.toLowerCase()}-multiple-checkbox-label`}
          sx={stylesMultipleSelect.inputLabel}
          variant="outlined"
        >
          {textToDisplay}
        </InputLabel>
        <Select
          labelId={`${textToDisplay.toLowerCase()}-multiple-checkbox-label`}
          id={`${textToDisplay.toLowerCase()}-multiple-checkbox`}
          multiple
          value={options}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {listOptions?.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={options.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default MultipleSelect
