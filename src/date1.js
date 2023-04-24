import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    'Направление 1',
    'Направление 2',
    'Направление 3',
    'Направление 4',
    'Направление 5',
  ];

function getStyles(name, Name, theme) {
  return {
    fontWeight:
      Name.indexOf(name) === -1
 ? theme.typography.fontWeightRegular
 : theme.typography.fontWeightMedium,
  };
}
export let ways = ["Направление 5"];
export default function MultipleSelect() {
  const theme = useTheme();
  const [Name, setName] = React.useState([]);
  let i = 0;
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    
    setName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value, ways[i] = value, i++
    );
    
  };

  return (
    <span>
      <FormControl sx={{ m: 1, width: 150, height: 20,  size: "small", verticalAlign: "start"}} size="small" vertical-align = "start">
        <InputLabel id="demo-multiple-name-label">Направление</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={Name}
          
          onChange={handleChange}
          input={<OutlinedInput label="Направление" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, Name, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </span>
  );
}

